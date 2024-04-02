const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

function square(n){
    if( n=== 0) return 0;
    return square(parseInt(n/10)) + parseInt(n%10)*parseInt(n%10); 
}

console.log(square(input));