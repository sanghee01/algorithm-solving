const fs = require("fs");
const [a, b, c] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let num = a*b*c;

function sumDgit(num){
    if(num <10) return num;
    return sumDgit(parseInt(num/10)) + num % 10;
}

console.log(sumDgit(num))