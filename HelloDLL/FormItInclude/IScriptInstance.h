#pragma once

#include <string>

#include "nlohmann/json.hpp"
#include "json/ScriptJSONConverter.h"

//! The IScriptInstance interface class is the base class for the Javascript wrappers.
class IScriptInstance
{
public:
    virtual void RegisterNamespaceHandler(std::string const& namespaces) = 0;
    virtual std::string Evaluate(const std::string& cmd) = 0;

    using APIFunc = std::function< nlohmann::json(IScriptInstance*, nlohmann::json&) >;

    //! Registers an API function.
    virtual void RegisterMethod(std::string const& apiPrefix,
        std::string const& apiName,
        std::string const& apiParams, APIFunc pFunc) = 0;
};

#define APIMETHOD(APIPREFIX, APINAME, PARAMS) scriptInstance->RegisterMethod(#APIPREFIX, #APINAME, PARAMS, [](IScriptInstance *scriptInstance, nlohmann::json &jin) -> nlohmann::json
#define JSON_UNDEFINED "{}"
#define REGISTERNAMESPACE(NS) if (scriptInstance) {scriptInstance->RegisterNamespaceHandler(NS);}
#define REGISTERAPIMETHODSDCL extern "C" {__declspec(dllexport) void __stdcall RegisterAPIMethods(IScriptInstance*);}
#define REGISTERAPIMETHODS void RegisterAPIMethods(IScriptInstance* scriptInstance)