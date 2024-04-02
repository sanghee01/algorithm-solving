const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const numList = input[1].split(" ").map(Number);
let max = 0;

function maxNum(n){
    if(n<0) return max;
    
    if(numList[n] > max){ 
        max = numList[n];
    }
    return maxNum(n-1);
}

console.log(maxNum(n));