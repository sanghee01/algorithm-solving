const input = require("fs").readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
input.shift();

const line = Array.from({length: 101}, () => 0);

for(let i =0; i<n ; i++){
    let [start, end] = input[i].split(" ").map(Number);
    for(let j = start; j <= end; j++ ){
        line[j] +=1;
    }
}

console.log(Math.max(...line))