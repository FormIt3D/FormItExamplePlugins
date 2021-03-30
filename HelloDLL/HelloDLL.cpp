#include "pch.h"

#include "FormItInclude/IScriptInstance.h"

#include "MyClass.h"

#include <sstream>

static MyClass sMyClass;

REGISTERAPIMETHODS
{
    if (!scriptInstance)
        return;

    // Example to call JS code
    scriptInstance->Evaluate("console.log(\"Registering HelloDLL JS functions from HelloDLL!!!\")");

    // Add new JS APIs
    REGISTERNAMESPACE("HelloDLL")

    APIMETHOD(HelloDLL, Test, "")
    {
        return "HelloDLL.Test called!";
    });

    APIMETHOD(HelloDLL, Test2, "")
    {
        // Example to call JS code
        scriptInstance->Evaluate("console.log(\"HelloDLL.Test2 JS function called from HelloDLL!!!\")");
        return JSON_UNDEFINED;
    });

    APIMETHOD(HelloDLL, TestArgs, "arg1, arg2")
    {
        // NOTE: The arg names above ^^^^ have to match the args in the macros below.
        SCRIPTCONVERTER(bool, arg1);
        SCRIPTCONVERTER(int, arg2);

        std::stringstream ss;
        std::string arg1Str = arg1 ? std::string("true") : std::string("false");
        ss << "Got arg1: " << arg1Str << " arg2: " << arg2;
        // Example to call JS code
        std::string cmd = "console.log(\"" + ss.str() + std::string("\")");
        scriptInstance->Evaluate(cmd);
        return JSON_UNDEFINED;
    });

    APIMETHOD(HelloDLL, GetMyClass, "")
    {
        return to_json(sMyClass);
    });

    APIMETHOD(HelloDLL, PassMyClass, "myClass")
    {
        SCRIPTCONVERTER(MyClass, myClass);
        return to_json(myClass);
    });

    REGISTERNAMESPACE("HelloDLL.NS2")

    APIMETHOD(HelloDLL.NS2, Test, "")
    {
        // Example to call JS code
        scriptInstance->Evaluate("console.log(\"HelloDLL.NS2.Test2 JS function called from HelloDLL!!!\")");
        return JSON_UNDEFINED;
    });
}
