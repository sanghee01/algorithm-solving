function is369(n){
     return n.toString().includes("3") || n.toString().includes("6") || n.toString().includes("9")
}

function isMagicNumber(n){
    return is369(n) || n % 3 ===0;
}

const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let cnt =0;
for(let i = a; i<= b; i++){
    if(isMagicNumber(i)) cnt++;
}
console.log(cnt);