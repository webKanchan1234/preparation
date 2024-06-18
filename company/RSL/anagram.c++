// Online C++ compiler to run C++ program online
#include <bits/stdc++.h>
using namespace std;
#define NO_OF_CHARS 256

// bool areAnagram(char* str1, char* str2){
//     // Create 2 count arrays and initialize all values as 0
//     int count1[NO_OF_CHARS] = { 0 };
//     int count2[NO_OF_CHARS] = { 0 };
//     int i;
 
//     // For each character in input strings, increment count
//     // in the corresponding count array
//     for (i = 0; str1[i] && str2[i]; i++) {
//         count1[str1[i]]++;
//         count2[str2[i]]++;
//     }
 
//     // If both strings are of different length. Removing
//     // this condition will make the program fail for strings
//     // like "aaca" and "aca"
//     if (str1[i] || str2[i])
//         return false;
 
//     // Compare count arrays
//     for (i = 0; i < NO_OF_CHARS; i++)
//         if (count1[i] != count2[i])
//             return false;
 
//     return true;
// }

bool areAnagram(string str1, string str2)
{
    // Get lengths of both strings
    int n1 = str1.length();
    int n2 = str2.length();
 
    if (n1 != n2)
        return false;
    sort(str1.begin(), str1.end());
    sort(str2.begin(), str2.end());
 
    for (int i = 0; i < n1; i++)
        if (str1[i] != str2[i])
            return false;
 
    return true;
}
int main() {
    string str1 = "arm";
    string str2 = "arm";
 
    // Function Call
    if (areAnagram(str1, str2))
        cout << "The two strings are anagram of each other";
    else
        cout << "The two strings are not anagram of each "
                "other";
 
    return 0;
}