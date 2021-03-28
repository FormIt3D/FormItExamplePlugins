#pragma once

#include <string>

#include "FormItInclude/json/ScriptJSONConverter.h"

class MyClass
{
    JSON_SPECIALIZATION_SUPPORT(MyClass)

public:
    MyClass() {}

private:
    bool m_Bool = true;
    int m_Int = 10;

    std::string m_Name = "MyClass";
};  // class MyClass

DECLARE_JSON_SPECIALIZATION_INTERNAL(MyClass);
