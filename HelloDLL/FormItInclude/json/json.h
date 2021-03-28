#pragma once

#ifdef min
#undef min
#endif

#ifdef WIN32
  #pragma warning(push)
  // C4706: assignment within conditional expression
  // C4996: 'function': was declared deprecated
  #pragma warning(disable: 4706 4996)
#endif

#ifdef ANDROID
// This is to implement the missing function strtold in NDK's c++-shared.
// If we upgrade to an NDK that has this function, this can be removed.
inline long double strtold(const char *nptr, char **endptr)
{
    return strtod(nptr, endptr);
}
#endif

#include "nlohmann/json.hpp"
using json = nlohmann::json;

const size_t JSON_INVALID_SIZE = (std::numeric_limits<size_t>::max)();
const size_t JSON_INVALID_ID = (std::numeric_limits<size_t>::max)();
const size_t JSON_INVALID_IDx32 = 0xFFFFFFFF;

#ifdef WIN32
  #pragma warning(pop)
#endif

// Below are definitions of "to_json" functions that are mainly used to
// convert user defined types to json objects and "from_json" functions that
// are used to read user defined types from json objects.  There is also
// special handling of the size_t type because 64 bit JSON_INVALID_ID can not
// be represented properly in JSON/Javascript.

// Primary template for arithmetic types.  This is separate from the primary
// template for enum types and for non-arithmetic types due to the different
// return type.
// Users, don't specialize this.
// Questions?  See http://www.gotw.ca/publications/mill17.htm
template<typename T,
         typename std::enable_if<std::is_arithmetic<T>::value>::type * = nullptr>
T to_json(T const &v)
{
    return v;
}

// Specialization for size_t to handle INVALID_ID vs INVALID_IDx32.
// This should be the only arithmetic specialization.
inline size_t to_json(size_t const &v)
{
#if PTRDIFF_MAX > 0x7fffffff
    // If we are running in x64, represent 64 bit -1 as 32 bit -1.
    if (v == JSON_INVALID_ID)
        return JSON_INVALID_IDx32;
#endif

    return v;
}

// Primary template for enum types. This is separate from the primary
// template for arithmetic types due to the different return type.
// Users, don't specialize this.
template<typename T,
     typename std::enable_if<std::is_enum<T>::value>::type * = nullptr>
auto to_json(T const &v)
{
    return static_cast<typename std::underlying_type<T>::type>(v);
}


// Specialization point for converting a type to JSON.
template<class T> struct to_json_impl
{
    static json f(T const &v)
    {
        return v;
    }
};

// Primary template for non-arithmetic, non-enum types.  This is separate
// from the primary templates for enum types and arithmetic types due to
// the different return type.
// Users, don't specialize this.
template<typename T> struct to_json_impl;

template<typename T,
         typename std::enable_if<!std::is_arithmetic<T>::value &&
                                 !std::is_enum<T>::value>::type * = nullptr>
json to_json(T const &v)
{
    return to_json_impl<T>::f(v);
}


// Specialization point for reading a type from JSON.
template<class T> struct from_json_impl
{
    static bool f(json const &j, std::string const &name, T &v,
                  bool bOptional = false)
    {
        if (j.is_null() || (!name.empty() && !j.count(name)))
            return bOptional;

        auto &jname = !name.empty() ? j[name] : j;

        try
        {
            v = jname.get<T>();
            return true;
        }
        catch (std::domain_error const &)
        {
            return false;
        }
    }
};

// Primary template for from_json.
// Users, don't specialize this.
template<typename T,
         typename std::enable_if<!std::is_enum<T>::value>::type * = nullptr>
bool from_json(json const &j, std::string const &name, T &v, bool bOptional = false)
{
    if (j.is_null())
        return bOptional;

    return from_json_impl<T>::f(j, name, v, bOptional);
}

// Primary template for from_json for enum types because enable_if can't
// be used in partial specialization.
// Users, don't specialize this.
template<typename T,
         typename std::enable_if<std::is_enum<T>::value>::type * = nullptr>
bool from_json(json const &j, std::string const &name, T &v, bool bOptional = false)
{
    if (j.is_null() || (!name.empty() && !j.count(name)))
        return bOptional;

    auto &jname = !name.empty() ? j[name] : j;

    try
    {
        v = static_cast<T>(jname.get<typename std::underlying_type<T>::type>());
        return true;
    }
    catch (std::domain_error const &)
    {
        return false;
    }
}

// Specializations of to_json_impl and from_json_impl for some generic types.
// More specialized types will be located in appropriate headers.

// Specialization for size_t to handle INVALID_ID vs INVALID_IDx32.
template<> struct from_json_impl<size_t>
{
    static bool f(json const &j, std::string const &name, size_t &v,
                  bool bOptional = false)
    {
        if (j.is_null() || (!name.empty() && !j.count(name)))
            return bOptional;

        auto &jname = !name.empty() ? j[name] : j;

        try
        {
            if (!jname.is_number())
                return false;

            v = jname.get<size_t>();

#if PTRDIFF_MAX > 0x7fffffff
            // If we are running in x64, interpret 32-bit INVALID_ID as 64-bit ones.
            if (v == JSON_INVALID_IDx32)
                v = JSON_INVALID_ID;
#endif

            return true;
        }
        catch (std::domain_error const &)
        {
            return false;
        }
    }
};

// Partial specializations for std::pair types.
template<typename T1, typename T2> struct to_json_impl<std::pair<T1, T2>>
{
    static json f(std::pair<T1, T2> const &pr)
    {
        return{{"first", to_json(pr.first)},{"second", to_json(pr.second)}};
    }
};

template<typename T1, typename T2> struct from_json_impl<std::pair<T1, T2>>
{
    static bool f(json const &j, std::string const &name,
                  std::pair<T1, T2> &pr, bool bOptional = false)
    {
        if (j.is_null() || (!name.empty() && !j.count(name)))
            return bOptional;

        auto &jname = !name.empty() ? j[name] : j;

        return from_json(jname, "first", pr.first, bOptional) &&
               from_json(jname, "second", pr.second, bOptional);
    }
};

// Partial specializations for std::vector types.
template<typename T> struct to_json_impl<std::vector<T>>
{
    static json f(std::vector<T> const &vec)
    {
        auto j = json::array();
        for (auto &val : vec)
            j.push_back(to_json(val));
        return j;
    }
};

template<typename T> struct from_json_impl<std::vector<T>>
{
    static bool f(json const &j, std::string const &name,
                  std::vector<T> &vec, bool bOptional = false)
    {
        if (j.is_null() || (!name.empty() && !j.count(name)))
            return bOptional;

        auto &jname = !name.empty() ? j[name] : j;
        if (!jname.is_array())
        {
            // Allow a single value of the correct type to
            // implicitly get converted to a vector of that type.
            T v;
            if (from_json(j, name, v, bOptional))
            {
                vec.resize(1);
                vec[0] = v;
                return true;
            }
            return false;
        }
        size_t size = jname.size();

        vec.resize(size);

        // No name when accessing array.
        std::string str;

        for (size_t i = 0; i < size; ++i)
        {
            if (!from_json(jname[i], str, vec[i], false))
                return false;
        }

        return true;
    }
};

// Full specialization for std::vector<bool> type.
template<> struct to_json_impl<std::vector<bool>>
{
    static json f(std::vector<bool> const &vec)
    {
        auto j = json::array();
        for (auto val : vec)
            j.push_back(to_json(bool(val)));
        return j;
    }
};

template<> struct from_json_impl<std::vector<bool>>
{
    static bool f(json const &j, std::string const &name,
                  std::vector<bool> &vec, bool bOptional = false)
    {
        if (j.is_null() || (!name.empty() && !j.count(name)))
            return bOptional;

        auto &jname = !name.empty() ? j[name] : j;
        size_t size = jname.size();

        vec.resize(size);

        // No name when accessing array.
        std::string str;

        for (size_t i = 0; i < size; ++i)
        {
            bool b = vec[i];

            if (!from_json(jname[i], str, b, false))
                return false;

            vec[i] = b;
        }

        return true;
    }
};

// Full specialization for std::tm type.
template<> struct to_json_impl<std::tm>
{
    static json f(std::tm const &v)
    {
        auto j = json::object();
        return{ { "tm_sec",   to_json(v.tm_sec) },
                { "tm_min",   to_json(v.tm_min) },
                { "tm_hour",  to_json(v.tm_hour) },
                { "tm_mday",  to_json(v.tm_mday) },
                { "tm_mon",   to_json(v.tm_mon) },
                { "tm_year",  to_json(v.tm_year) },
                { "tm_wday",  to_json(v.tm_wday) },
                { "tm_yday",  to_json(v.tm_yday) },
                { "tm_isdst", to_json(v.tm_isdst) } };
    }
};

template<> struct from_json_impl<std::tm>
{
    static bool f(json const &j, std::string const &name, std::tm &v,
                  bool bOptional = false)
    {
        if (j.is_null() || (!name.empty() && !j.count(name)))
            return bOptional;

        auto &jname = !name.empty() ? j[name] : j;

        return from_json(jname, "tm_sec",   v.tm_sec,   bOptional) &&
               from_json(jname, "tm_min",   v.tm_min,   bOptional) &&
               from_json(jname, "tm_hour",  v.tm_hour,  bOptional) &&
               from_json(jname, "tm_mday",  v.tm_mday,  bOptional) &&
               from_json(jname, "tm_mon",   v.tm_mon,   bOptional) &&
               from_json(jname, "tm_year",  v.tm_year,  bOptional) &&
               from_json(jname, "tm_wday",  v.tm_wday,  bOptional) &&
               from_json(jname, "tm_yday",  v.tm_yday,  bOptional) &&
               from_json(jname, "tm_isdst", v.tm_isdst, bOptional);
    }
};

// Partial specializations for std::array types.
template<typename T, size_t S> struct to_json_impl<std::array<T, S>>
{
    static json f(std::array<T, S> const &vec)
    {
        auto j = json::array();
        for (auto &val : vec)
            j.push_back(to_json(val));
        return j;
    }
};

template<typename T, size_t S> struct from_json_impl<std::array<T, S>>
{
    static bool f(json const &j, std::string const &name,
                  std::array<T, S> &vec, bool bOptional = false)
    {
        if (j.is_null() || (!name.empty() && !j.count(name)))
            return bOptional;

        auto &jname = !name.empty() ? j[name] : j;
        size_t size = std::min(jname.size(), vec.size());

        // No name when accessing array.
        std::string str;

        for (size_t i = 0; i < size; ++i)
        {
            if (!from_json(jname[i], str, vec[i], false))
                return false;
        }

        return true;
    }
};

// Partial specialization for shared pointers.
template<typename T> struct from_json_impl<std::shared_ptr<T>>
{
    static bool f(json const &j, std::string const &name,
                  std::shared_ptr<T> &pData, bool bOptional = false)
    {
        if (j.is_null() || (!name.empty() && !j.count(name)))
            return bOptional;

        pData = std::make_shared<T>();

        return from_json(j, name, *pData, bOptional);
    }
};


inline std::string json_to_string(json const &j)
{
#ifdef _DEBUG
    // Debug version is non-const so it can be changed in the debugger.
    // This allows setting it to a positive integer to get pretty-printing.
    // This pretty-printing is not the default because enabling it causes
    // test failures in tests that create journal files and then compare them
    // to baseline journals.  The value of the integer is the number of spaces
    // per indent level.
    static int nIndentLevel = -1;
#else
    const static int nIndentLevel = -1;
#endif
    return j.dump(nIndentLevel);
}

// JSON_SPECIALIZATION_SUPPORT adds JSON_SPECIALIZATION support to the given
// class.  Needed to access the protected/private data in the class.
#define JSON_SPECIALIZATION_SUPPORT(CLASS_NAME) \
friend to_json_impl<CLASS_NAME>;                \
friend from_json_impl<CLASS_NAME>;              


// Declare the requires types for these two operations from above on a
// user-defined type. This is a variadic macro so that it can handle type
// names with embedded commas, such as std::pair<int, int>.
//
// The first parameter is the base name of a macro used for exporting these
// functions when creating a Windows DLL (base name is the part before
// the _EXPORT).
//
// Specialization point for converting a type to JSON.
// Specialization point for reading a type from JSON.
//
// Example:
//
// DECLARE_JSON_SPECIALIZATION(WSM, WSM::Point2d);
//
#define DECLARE_JSON_SPECIALIZATION(MODULE, ...)                           \
template<> struct to_json_impl<__VA_ARGS__>                                \
{                                                                          \
    MODULE##_EXPORT static json f(__VA_ARGS__ const &);                    \
};                                                                         \
template<> struct from_json_impl<__VA_ARGS__>                              \
{                                                                          \
    MODULE##_EXPORT static bool f(json const &j, std::string const &name,  \
                                  __VA_ARGS__ &v, bool bOptional = false); \
};

// Same as DECLARE_JSON_SPECIALIZATION, except in the situation the class is
// internal and not exported.  Used in Add In DLLs.
#define DECLARE_JSON_SPECIALIZATION_INTERNAL(...)                          \
template<> struct to_json_impl<__VA_ARGS__>                                \
{                                                                          \
    static json f(__VA_ARGS__ const &);                                    \
};                                                                         \
template<> struct from_json_impl<__VA_ARGS__>                              \
{                                                                          \
    static bool f(json const &j, std::string const &name,                  \
                                  __VA_ARGS__ &v, bool bOptional = false); \
};

// Start the definition of the specialization point for converting a type to
// JSON. This is a variadic macro so that it can handle type names with
// embedded commas, such as std::pair<int, int>.
//
// Example:
//
// DEFINE_JSON_TO_SPECIALIZATION(WSM::Point2d)
// {
//     return{{"objectName", "Point2d"},
//            {"x",          to_json(v.x)},
//            {"y",          to_json(v.y)}};
// }
//
#define DEFINE_JSON_TO_SPECIALIZATION(...) \
json to_json_impl<__VA_ARGS__>::f(__VA_ARGS__ const &v)

// Start the definition of the specialization point for reading a type from
// JSON. This is a variadic macro so that it can handle type names with
// embedded commas, such as std::pair<int, int>.
//
// Example:
//
// DEFINE_JSON_FROM_SPECIALIZATION(WSM::Point2d)
// {
//     TEST_JSON_OBJECT_TYPE_INTO_VARIABLE(j, name, bOptional, jname, "Point2d");
//
//     return from_json(jname, "x", v.x) &&
//            from_json(jname, "y", v.y);
// }
#define DEFINE_JSON_FROM_SPECIALIZATION(...)                                \
bool from_json_impl<__VA_ARGS__>::f(json const &j, std::string const &name, \
                                    __VA_ARGS__ &v, bool bOptional)

// Helper function for from_json on objects and array elements.
// Input:
// The parent of the value to test for a object member, or the value to test
// for an array element.
// The name of the child value to find, empty for accessing an array element.
// Whether this value is optional or not.
// The object type name as std::string.
// The optional second object type name.
// Output:
// bResult is the value to return from Get when bDone is true.
// bDone indicates whether to return bResult from Get or continue reading.
// The return value is the input object or its named child.
inline json const &
test_object_type(json const &j, std::string const &name, bool bOptional,
                 std::string const &objectType, std::string const &objectType2,
                 bool &bResult, bool &bDone, bool bAlsoAllowArray)
{
    // We are done unless we get through all this successfully.
    bResult = bOptional;
    bDone = true;

    // If that name doesn't exist, done.
    if (j.is_null() || (!name.empty() && !j.count(name)))
        return j;

    // Get the value to test for the remainder of the function, also the
    // return value.
    auto &jname = !name.empty() ? j[name] : j;

    if (!jname.is_object())
    {
        if (!name.empty() && jname.is_string())
        {
            // Convert the string to an object.
            //TODO(hauswij): FORMIT-8845 Remove const json param in test_object_type
            const_cast<json&>(jname) = json::parse(jname.get<std::string>());
        }
        // See if this is an array and arrays are allowed.
        else if (bAlsoAllowArray && jname.is_array())
        {
            bDone = false;
            return jname;
        }
    }

    // Check to see if the value has an objectName member to tell us the type.
    if (!jname.count("objectName"))
    {
        // Allow an empty object for optional parameters.
        if (bOptional)
            bResult = jname.empty();

        return jname;
    }

    // Get the objectName member so we can check to see if it matches.
    auto &v = jname["objectName"];

    // If it's not a string, that is an error.
    if (!v.is_string())
        return jname;

    // If it's the wrong string, that is an error.
    auto str = v.get<std::string>();

    if ((str != objectType) && (objectType2.empty() || str != objectType2))
        return jname;

    // This is a valid object of the desired type.
    bDone = false;
    return jname;
}

// Creates a static objectName variable (so we don't need to create one
// each time this is called) with the contents of the second parameter,
// to pass to test_object_type, then calls test_object_type with the
// "bAlsoAllowArray" parameter false.
//
// If test_object_type indicates that we're done processing, it returns the
// result.  Otherwise, a variable named in the first parameter is available
// for reading the rest of the data.
//
// If this type can be reading using two different JSON objectName values,
// include the second one as the optional sixth parameter.
//
// Example, reading this JSON:
// {{"objectName", "Point2d"}, {"x", 0.0}, {"y", 0.0}}
//
// TEST_JSON_OBJECT_TYPE_INTO_VARIABLE(j, name, bOptional, jname, "Point2d");
//
// return from_json(jname, "x", v.x) && from_json(jname, "y", v.y);
//
#define TEST_JSON_OBJECT_TYPE_INTO_VARIABLE(j, name, bOptional, jname, type, ...) \
    const static std::string objectName{ type };                        \
    const static std::string objectName2 = { __VA_ARGS__ };             \
    bool TEST_OBJECT_TYPE_RESULT = false, TEST_OBJECT_TYPE_DONE = true; \
    auto &jname = test_object_type(j, name, bOptional, objectName,      \
                                   objectName2, TEST_OBJECT_TYPE_RESULT,\
                                   TEST_OBJECT_TYPE_DONE, false);       \
    if (TEST_OBJECT_TYPE_DONE) return TEST_OBJECT_TYPE_RESULT;

// Creates a static objectName variable (so we don't need to create one
// each time this is called) with the contents of the second parameter,
// to pass to test_object_type, then calls test_object_type with the
// "bAlsoAllowArray" parameter true.
//
// If test_object_type indicates that we're done processing, it returns the
// result.  Otherwise, a variable named in the first parameter is available
// for reading the rest of the data.
//
// If this type can be reading using two different JSON objectName values,
// include the second one as the optional sixth parameter.
#define TEST_JSON_OBJECT_TYPE_OR_ARRAY_INTO_VARIABLE(j, name, bOptional, jname, type, ...) \
    const static std::string objectName{ type };                        \
    const static std::string objectName2 = { __VA_ARGS__ };             \
    bool TEST_OBJECT_TYPE_RESULT = false, TEST_OBJECT_TYPE_DONE = true; \
    auto &jname = test_object_type(j, name, bOptional, objectName,      \
                                   objectName2, TEST_OBJECT_TYPE_RESULT,\
                                   TEST_OBJECT_TYPE_DONE, true);        \
    if (TEST_OBJECT_TYPE_DONE) return TEST_OBJECT_TYPE_RESULT;
