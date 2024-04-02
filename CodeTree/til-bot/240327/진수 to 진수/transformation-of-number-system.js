const input = require("fs").readFileSync(0).toString().trim().split("\n");
const [a, b] = input[0].split(" ").map(Number);
let num = input[1].split("").map(Number);

let decimal = 0;
for(let i = 0; i<num.length;i++){
    decimal = decimal * a + num[i];
}

let digits = []
while(true){
    if(decimal < b){
        digits.push(decimal);
        break;
    }

    digits.push(decimal%b);
    decimal = Math.floor(decimal/b)
}

console.log(digits.reverse().join(""))