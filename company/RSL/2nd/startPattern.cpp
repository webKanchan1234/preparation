// Online C++ compiler to run C++ program online
#include<bits/stdc++.h>
using namespace std;

void printTriangle(int n) {
    for (int i = 1; i <= n; ++i) {           // Loop for each row
        for (int j = 1; j <= i; ++j) {       // Loop for each column
            std::cout << "* ";               // Print star
        }
        std::cout << std::endl;              // Move to the next line after each row
    }
}

int main() {
    int n=5;

    printTriangle(n);

    return 0;
}
