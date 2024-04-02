function evenDiv (l){
    for(let n of l){
        if(n % 2 === 0){
            n =  n/2;
        }
     process.stdout.write(n + " ");
    }
}

const fs = require("fs");
const [n, l] = fs.readFileSync(0).toString().trim().split("\n");
evenDiv(l.split(" ").map(Number));