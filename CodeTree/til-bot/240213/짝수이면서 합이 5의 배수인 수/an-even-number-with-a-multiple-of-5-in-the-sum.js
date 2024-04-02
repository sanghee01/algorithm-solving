function isMagicNumber(n){
    let answer = "No";

    if(n % 2 === 0 && (Math.floor(n/10) + n%10)%5===0) answer="Yes";

    return answer;
}

const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());
console.log(isMagicNumber(input));