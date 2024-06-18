// Write a function that takes a string as an input and returns the first non-repeating character.

#include<bits/stdc++.h>
using namespace std;

char firstNonRepeatingCharacter(const std::string& str) {
    std::unordered_map<char, int> charCount;
    for (char ch : str) {
        charCount[ch]++;
    }
    for (char ch : str) {
        if (charCount[ch] == 1) {
            return ch;
        }
    }
    return '\0'; 
}

int main() {
    string input="kanchan";
    char result = firstNonRepeatingCharacter(input);
    cout<<result;
    return 0;
}
