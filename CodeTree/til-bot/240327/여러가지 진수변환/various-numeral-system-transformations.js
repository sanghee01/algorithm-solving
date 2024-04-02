let [number, change] = require("fs").readFileSync(0).toString().trim().split(" ").map(Number);

const digits = [];
while(true){
    if(number<change){
        digits.push(number);
        break;
    }
    digits.push(number%change);
    number = Math.floor(number/change);
}

console.log(digits.reverse().join(""));