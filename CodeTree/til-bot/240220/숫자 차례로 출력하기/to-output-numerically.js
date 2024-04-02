const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

function printNum(n){
    if(n===0){
        process.stdout.write("\n");
        return;
    }
    process.stdout.write(input-n+1 + " ");
    printNum(n-1);
    process.stdout.write(input-n+1 + " ");
}

printNum(input);