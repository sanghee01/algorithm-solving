function isMagicNumber(n){
    if(n % 2 === 0 || n % 10 === 5 || (n % 3 === 0 && n % 9 !== 0)){
        return false;
    }else{
        return true;
    }
}

const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let cnt = 0;
for(let i = a; i<=b; i++){
    if(isMagicNumber(i)) cnt++;
}
console.log(cnt);