// Online C++ compiler to run C++ program online
#include <bits/stdc++.h>
using namespace std;

int evenSum(vector<int> v)
{
  
   int ans=0;
   for(int i=0;i<v.size();i++){
       if(v[i]%2==0){
           ans+=v[i];
       }
   }
   return ans;
}

int main() {
    vector<int> v{1,2,3,4,5,6};
    cout<<evenSum(v);
    return 0;
}


/////////////////////// DONE//////////////////////////