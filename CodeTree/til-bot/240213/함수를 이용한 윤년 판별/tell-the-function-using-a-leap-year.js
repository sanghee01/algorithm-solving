function isYunNyun(n){
    if(n % 400 === 0) return true;
    if(n % 4 === 0 && n % 100 === 0 ) return false;
    if(n % 4 === 0) return true;
    return false;
}

const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());
console.log(isYunNyun(input))