const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());
let cnt = 0;

function untilOne(n){
    if(n === 1) return;
    cnt++;
    if(n % 2 ===0){
        untilOne(n/2);
    } else {
        untilOne(parseInt(n/3));
    }
}

untilOne(input);
console.log(cnt);