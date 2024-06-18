// Write a function that takes an integer as an input and returns the nearest prime number. 
#include <iostream>
#include <cmath>
bool isPrime(int n) {
    if (n <= 1) return false;
    if (n == 2 || n == 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) return false;
    }
    return true;
}

int nearestPrime(int num) {
    if (num <= 2) return 2; 

    int lower = num;
    int upper = num;
    while (lower > 2 && !isPrime(lower)) {
        lower--;
    }

    while (!isPrime(upper)) {
        upper++;
    }

    if ((num - lower) <= (upper - num)) {
        return lower;
    } else {
        return upper;
    }
}

int main() {
    int num=101;

    int nearest = nearestPrime(num);
    std::cout << "The nearest prime number is: " << nearest << std::endl;

    return 0;
}



// --------------------------- done ---------------------------
