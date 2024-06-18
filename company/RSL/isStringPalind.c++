// Online C++ compiler to run C++ program online
#include <bits/stdc++.h>
using namespace std;

bool isPalindrome(string str) {
    int l = 0;
    int r = str.size() - 1;
    while (l < r) {
        if (str[l] != str[r]) {
            return false;
        }
        l++;
        r--;
    }
      return true;
}

int main() {
    string s="abc"
    
    cout<<isPalindrome(s);
    return 0;
}

// --------------------------- done ---------------------------
