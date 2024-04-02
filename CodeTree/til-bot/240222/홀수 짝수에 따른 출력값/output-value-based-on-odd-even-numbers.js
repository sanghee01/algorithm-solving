const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

function getSum(n){
    if(n === 2){
        return 2;
    }else if( n=== 1){
        return 1;
    }

    return getSum(n-2) + n;
}

console.log(getSum(n));