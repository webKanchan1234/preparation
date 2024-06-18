// -----------------------------<bits/stdc++.h> in C++----------------
// It is basically a header file that includes every standard library. In programming contests, using this file is a good idea, when you want to reduce the time wasted in doing chores; especially when your rank is time sensitive. 

// bits/stdc++.h is a non-standard header file of GNU C++ library. So, if you try to compile your code with some compiler other than GCC it might fail; e.g. MSVC do not have this header.



// ------------------------------- using namespace std ------------------
// Namespace provide the space where we can define or declare identifier i.e. variable,  method, classes.
// It is known that “std” (abbreviation for the standard) is a namespace whose members are used in the program.
// So the members of the “std” namespace are cout, cin, endl, etc.
// This namespace is present in the iostream.h header file.


// ------------------------------- range data type ------------------





// ------------------------------- stringstream ---------------------------
// StringStream in C++ is similar to cin and cout streams and allows us to work with strings.
// The StringStream class in C++ is derived from the iostream class. Similar to other stream-based classes, StringStream in C++ allows performing insertion, extraction, and other operations. It is commonly used in parsing inputs and converting strings to numbers, and vice-versa.

// str(): Gets and sets the string object’s content in the stream
// clear(): Clears the stream
// operator <<- Add a string to the stringstream object. 
// operator >>- Read something from the stringstream object.


// ------------------------------- memset ---------------------------
// Memset() is a C++ function. It copies a single character for a specified number of times to an object. It is useful for filling a number of bytes with a given value starting from a specific memory location. It is defined in <cstring> header file.
// If n is greater than the size of the object pointed to by str, the behavior is undefined. 

// Note: We can use memset() to set all values as 0 or -1 for integral data types also. It will not work if we use it to set as other values. The reason is simple, memset works byte by byte. 