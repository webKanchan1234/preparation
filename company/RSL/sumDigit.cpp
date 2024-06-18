// Online C++ compiler to run C++ program online
#include <bits/stdc++.h>
using namespace std;

int sum(int n){
    int sum=0;
    while(n>0){
        sum+=n%10;
        n/=10;
    }
    return sum;
}

int main() {
    int n=3455433;
    
    cout<<sum(n);
    return 0;
}


// ------------------------------------ DONE -------------------------------