const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const list = input[1].split(" ").map(Number);

function absoluteNum(list){
    for(let n of list){
        if(n<0){
            n *= -1;
        }
        process.stdout.write(n + " ");
    }
}

absoluteNum(list);