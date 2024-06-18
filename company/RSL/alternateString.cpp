// Write a function that takes an input parameter as a string and return the alternate words in it with “abc”. Words are separated by dots.
#include<bits/stdc++.h>
#include<string.h>
using namespace std;

string disp(string s){
    vector<string>str;
    string t="";
    for(int i=0;i<s.length();i++){
        if(s[i]=='.'){
            str.push_back(t);
            t="";
        }else{
            t+=s[i];
        }
    }
    string ans="";
    for(int i=0;i<str.size();i+=2){
        ans+=str[i];
        ans+=".abc.";
    }
    ans.pop_back();
    return ans;
}

int main() {
    string s="i.like.this.program.very.much";
    cout<<disp(s);
    // cout<<s;
    return 0;
}



