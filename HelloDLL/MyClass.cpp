#include "pch.h"

#include "MyClass.h"

DEFINE_JSON_TO_SPECIALIZATION(MyClass)
{
    return
    {
        {"objectName",  "HelloDLL::MyClass"},
        {"m_Bool",      to_json(v.m_Bool)},
        {"m_Int",       to_json(v.m_Int)},
        {"m_Name",      to_json(v.m_Name)},
    };
}

DEFINE_JSON_FROM_SPECIALIZATION(MyClass)
{
    TEST_JSON_OBJECT_TYPE_INTO_VARIABLE(j, name, bOptional, jname, "HelloDLL::MyClass");

    return from_json(jname, "m_Bool", v.m_Bool) && 
           from_json(jname, "m_Int", v.m_Int) &&
           from_json(jname, "m_Name", v.m_Name);
}
