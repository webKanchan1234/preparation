// Online C++ compiler to run C++ program online
#include <bits/stdc++.h>
using namespace std;

void printCharWithFreq(string str)
{
    int n = str.size();
 
    int freq[26];
 
    memset(freq, 0, sizeof(freq));
    
    for (int i = 0; i < n; i++)
        freq[str[i] - 'a']++;
    for (int i = 0; i < n; i++) {
        if (freq[str[i] - 'a'] != 0) {
            cout << str[i] << freq[str[i] - 'a'] << " ";
            freq[str[i] - 'a'] = 0;
        }
    }
}
int main() {
    // Write C++ code here
    string s="ggeksforgeeks";
    printCharWithFreq(s);
    return 0;
}


// ---------------------------2nd metd map ---------------------------