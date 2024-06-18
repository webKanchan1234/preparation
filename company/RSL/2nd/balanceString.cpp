// If the given string is balanced then return the same string.
// If the given string is unbalanced then balance the string and then return it.


#include<bits/stdc++.h>
using namespace std;

bool isBalanced(const std::string& str) {
    std::stack<char> stack;

    for (char ch : str) {
        if (ch == '(') {
            stack.push(ch);
        } else if (ch == ')') {
            if (stack.empty()) {
                return false; 
            }
            stack.pop();
        }
    }

    return stack.empty(); 
}

std::string balanceString(const std::string& str) {
    std::stack<char> stack;
    std::string balancedStr = str;

    for (size_t i = 0; i < balancedStr.length(); ++i) {
        if (balancedStr[i] == '(') {
            stack.push(i);
        } else if (balancedStr[i] == ')') {
            if (stack.empty()) {
                balancedStr.insert(i, "("); 
                ++i; 
            } else {
                stack.pop();
            }
        }
    }

    while (!stack.empty()) {
        balancedStr += ')';
        stack.pop();
    }

    return balancedStr;
}

std::string checkAndBalance(const std::string& str) {
    if (isBalanced(str)) {
        return str;
    } else {
        return balanceString(str);
    }
}

int main() {
    string input="(())(((";

    std::string result = checkAndBalance(input);
    std::cout << "The balanced string is: " << result << std::endl;

    return 0;
}
