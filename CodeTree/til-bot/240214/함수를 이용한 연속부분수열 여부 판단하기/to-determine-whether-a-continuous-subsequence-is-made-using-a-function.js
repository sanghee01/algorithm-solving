function isInARow(a, b){
    let answer = "No";
    if(a.join("").includes(b.join(""))) answer="Yes"

    return answer;
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [a, b] = [input[1].split(" ").map(Number), input[2].split(" ").map(Number)];
console.log(isInARow(a, b));