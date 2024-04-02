function isPalindrome(a){
    for(let i = 0; i < a.length/2; i++){
        if(a[i] !== a[a.length-i-1]) return "No";
    }
    return "Yes";
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
console.log(isPalindrome(input));