// Online C++ compiler to run C++ program online
#include <bits/stdc++.h>
using namespace std;

string decToBinary(int n)
{
   string s;
    while (n > 0) {

        // storing remainder in binary array
        s += to_string(n % 2);
        n = n / 2;
    }
    reverse(s.begin(),s.end());
    return s;
}

// string DecimalToBinary(int num)
// {
//     string str;
//       while(num){
//       if(num & 1) // 1
//         str+='1';
//       else // 0
//         str+='0';
//       num>>=1; // Right Shift by 1  
//     }    
//       return str;
// }

// int main()
// {

//     // input number
//     int number = 16;
//     int n = (int)(log2(number));
  
//     // binary output
//     // using the inbuilt function
//     cout << "the binary number is : "
//          << bitset<64>(number).to_string().substr(64 - n
//                                                   - 1);
// }

int main() {
    int n=12;
    
    cout<<decToBinary(n);
    return 0;
}


// --------------------------- done ---------------------------
