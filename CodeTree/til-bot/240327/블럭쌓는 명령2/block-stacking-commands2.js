const input = require("fs").readFileSync(0).toString().trim().split("\n");
const [n,k] = input[0].trim().split(" ").map(Number);
input.shift();

const blocks = new Array(n+1).fill(0)

input.forEach((a) =>{
    let [start, end] = a.trim().split(" ").map(Number);
    for(let i = start; i <= end; i++){
        blocks[i] += 1;
    }
})

console.log(Math.max(...blocks))