// Write a function that takes two inputs, year, and n and returns n leap year after the given year.

#include<bits/stdc++.h>
using namespace std;

// Function to check if a year is a leap year
bool isLeapYear(int year) {
    if (year % 4 != 0) return false;
    if (year % 100 != 0) return true;
    if (year % 400 != 0) return false;
    return true;
}

vector<int> nthLeapYearAfter(int year, int n) {
    int count = 0;
    int currentYear = year;
    vector<int>ans;

    while (count < n) {
        currentYear++;
        if (isLeapYear(currentYear)) {
            ans.push_back(currentYear);
            count++;
        }
    }

    return ans;
}

int main() {
    int year=1999, n=4;
   

    vector<int> res = nthLeapYearAfter(year, n);
    for(auto x:res){
        cout<< x <<" ";
    }

    return 0;
}
