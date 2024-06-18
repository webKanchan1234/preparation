#include <iostream>

void printPyramid(int n) {
    for (int i = 1; i <= n; ++i) {
        for (int j = 1; j <= n - i; ++j) {
            std::cout << " ";
        }

        for (int j = 1; j <= 2 * i - 1; ++j) {
            std::cout << "*";
        }

        std::cout << std::endl;
    }
}

int main() {
    int height;
    std::cout << "Enter the height of the pyramid: ";
    std::cin >> height;

    printPyramid(height);

    return 0;
}
