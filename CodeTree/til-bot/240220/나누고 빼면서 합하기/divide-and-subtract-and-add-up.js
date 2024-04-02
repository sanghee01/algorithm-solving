const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const l = input[1].split(" ").map(Number);


function magicSum(n, m, l){
    let sum = l[m-1];
    while(m!==1){
        if(m % 2 === 0){
            m /= 2;
        }else {
            m -= 1;
        }
        sum += l[m-1];
    }
    return sum;
}

console.log(magicSum(n,m,l));