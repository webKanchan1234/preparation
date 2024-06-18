// Write a function that takes a string as input and returns the output as an integer (STOI).

#include<bits/stdc++.h>
using namespace std;
int customStoi(const std::string& str) {
    int i = 0;
    // Skip leading whitespace
    while (i < str.length() && std::isspace(str[i])) {
        i++;
    }

    // Check for optional sign
    int sign = 1;
    if (i < str.length() && (str[i] == '+' || str[i] == '-')) {
        if (str[i] == '-') {
            sign = -1;
        }
        i++;
    }

    // Convert characters to integer
    int result = 0;
    while (i < str.length() && std::isdigit(str[i])) {
        // Check for overflow and underflow
        if (result > (INT_MAX - (str[i] - '0')) / 10) {
            throw std::out_of_range("Integer overflow or underflow");
        }
        result = result * 10 + (str[i] - '0');
        i++;
    }

    // If no digits were found
    if (i == 0 || (i == 1 && (str[0] == '+' || str[0] == '-'))) {
        throw std::invalid_argument("Invalid input string");
    }

    return result * sign;
}

int main() {
    string input="   -3b4j";

    try {
        int result = customStoi(input);
        std::cout << "The converted integer is: " << result << std::endl;
    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << std::endl;
    }

    return 0;
}
