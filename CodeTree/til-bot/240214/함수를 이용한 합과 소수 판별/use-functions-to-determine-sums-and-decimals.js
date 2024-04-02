function isPrime(n){
    for(let i = 2; i<n ;i++){
        if(n%i ===0) return false;
    }
    return true;
}

function isAllDigitSumEven(n){
    if(n<10 && n%2 === 0) return true;
    else if(n >= 10 && (parseInt(n/10) + n%10)%2 === 0) return true;
    else return false;
}

function isMagicNumber(n){
    if(isPrime(n) && isAllDigitSumEven(n)) return true;
    else return false;
}

const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let cnt = 0;
for(let i = a; i <= b; i++){
    if(isMagicNumber(i)) cnt++;
}
console.log(cnt);