// Write a function that takes a number as input if the given number is a Fibonacci number, prints the number otherwise, print the sum of all even Fibonacci numbers less than the given number.

#include<bits/stdc++.h>
using namespace std;

bool isPerfectSquare(int n) {
    int s = sqrt(n);
    return (s * s == n);
}
bool isFibonacci(int n) {
    return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

// int fib(int n) 
// { 
//     if (n <= 1) 
//         return n; 
//     return fib(n - 1) + fib(n - 2); 
// } 

// int fib(int n) 
// { 
//     int a = 0, b = 1, c, i; 
//     if( n == 0) 
//         return a; 
//     for(i = 2; i <= n; i++) 
//     { 
//        c = a + b; 
//        a = b; 
//        b = c; 
//     } 
//     return b; 
// } 

int sumEvenFibonacci(int n) {
    int a = 0, b = 1, sum = 0;
    while (b < n) {
        if (b % 2 == 0) {
            sum += b;
        }
        int next = a + b;
        a = b;
        b = next;
    }
    return sum;
}

int main() {
    int num=21;

    if (isFibonacci(num)) {
        std::cout << num << std::endl;
    } else {
        std::cout << sumEvenFibonacci(num) << std::endl;
    }

    return 0;
}


// --------------------------- done ---------------------------
