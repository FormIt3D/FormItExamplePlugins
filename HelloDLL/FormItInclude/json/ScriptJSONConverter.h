#pragma once

#include "json.h"

// The value being retrieved must be valid, full error checking is done.
// If it's an std::vector, it is not allowed to be empty.
#define SCRIPTCONVERTER(TYPE, VAR)                                                           \
    TYPE VAR;                                                                                \
    if(!from_json(jin, #VAR, VAR))                                                           \
    {                                                                                        \
        std::string api = jin["TestAPI"];                                                    \
        std::string cmd =                                                                    \
        "console.log(\"ERROR: " + api + " unable to retrieve " #VAR " of type " #TYPE "\");";\
        scriptInstance->Evaluate(cmd);                                                        \
        assert(!"Unable to retrieve " #VAR " of type " #TYPE);                               \
        return {};                                                                           \
    }

// Macro to attempt retrieving the given type with the given property name.
#define SCRIPTCONVERTERPOSSIBLETYPE(TYPE, VAR, LAMBDA)                                  \
    {TYPE VAR;                                                                               \
    if(from_json(jin, #VAR, VAR))                                                            \
    {                                                                                        \
        LAMBDA(VAR);                                                                         \
    }}

// The value being retrieved is optional, but if it's provided, it must be
// valid.  If it's an std::vector, it is allowed to be empty.  The variable is
// initialized using the given optional arguments in = {}.
#define SCRIPTCONVERTER_OPTIONAL(TYPE, VAR, ...)                                             \
    TYPE VAR = { __VA_ARGS__ };                                                              \
    if(!from_json(jin, #VAR, VAR, true))                                                     \
    {                                                                                        \
        return {};                                                                           \
    }

// The value being retrieved is optional, but if it's provided, it must be
// valid.  If it's an std::vector, it is allowed to be empty.  The variable is
// initialized using the given optional arguments in = {}.
// Additionally, the caller wants to know if the value was provided.
// A second bool variable is created with a prepended b.
#define SCRIPTCONVERTER_PROVIDED(TYPE, VAR, ...)                           \
    TYPE VAR = { __VA_ARGS__ };                                            \
    bool b##VAR = 0 != jin.count(#VAR);                                    \
    if(b##VAR && !from_json(jin, #VAR, VAR))                               \
    {                                                                      \
        std::string api = jin["TestAPI"];                                  \
        std::string cmd =                                                  \
        "console.log(\"ERROR: " + api + " unable to retrieve " #VAR "\");";\
        scriptInstance->Evaluate(cmd);                                      \
        assert(!"Unable to retrieve " #VAR " of type " #TYPE);             \
        return {};                                                         \
    }

// This macro uses the HistoryObjects class to convert the many representations
// of Object collections to an array of Object IDs used by all the WSM APIs.
#define SCRIPTHISTORYOBJECTSCONVERTER(NAME) WSM::Utils::HistoryObjects NAME(jin, #NAME);

// This macro uses the JSHistoryID class to convert int/FormIt::UndoManagement::HistoryID
// to FormIt::UndoManagement::HistoryID.
#define SCRIPTHISTORYIDCONVERTER(NAME) FormIt::UndoManagement::JSHistoryID NAME(#NAME, jin);

// This macro uses the JSStateID class to convert int/FormIt::UndoManagement::StateID
// to FormIt::UndoManagement::StateID.
#define SCRIPTSTATEIDCONVERTER(NAME) FormIt::UndoManagement::JSStateID NAME(#NAME, jin);
