const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const a = input[1].split(" ").map(Number);

function getAnwser(){
    for(let i = 0; i<m; i++){
        let sum = 0;
        let [a1, a2] = input[i+2].split(" ").map(Number);
        for(let i = a1; i <= a2; i++){
            sum += a[i-1];
        } 
        console.log(sum);
    }
}

getAnwser();