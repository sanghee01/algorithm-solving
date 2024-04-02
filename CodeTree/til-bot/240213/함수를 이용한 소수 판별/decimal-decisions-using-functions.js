function isPrime(n){
    if(n===1) return false;
    for(let i = 2; i<n; i++){
        if (n % i === 0) return false;
    }
    return true;
}

const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sum = 0;
for(let i = a; i<=b; i++){
    if(isPrime(i)) sum += i;
}
console.log(sum);