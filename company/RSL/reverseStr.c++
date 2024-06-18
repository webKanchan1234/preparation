// reverse whole string not a single word of a string like “I.like” = “like.i”

#include <bits/stdc++.h>
using namespace std;

string reverseStr(string s){
    stringstream str(s);
    string ans="";
    string w;
    while(str>>w){
        w+=".";
        ans=w+ans;
        
    }
    ans.pop_back();
    return ans;
}

int main() {
    
    string s="i like you";
    cout<<reverseStr(s);
    return 0;
}


// ----------------------- try another methods ---------------------------------