const binary = require("fs").readFileSync(0).toString().trim().split("").map(Number);


let num = 0;

for(let i = 0; i <binary.length; i++){
    num = num * 2 + binary[i];
}

num *= 17;

const digits = []

while(true){
    if(num<2){
        digits.push(num);
        break;
    }

    digits.push(num%2);
    num = Math.floor(num/2);
}

console.log(digits.reverse().join(""))