const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

function fibonacci(n){
    if(n===1 || n===2) return 1;

    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(n));

// An = An-1 + An-2