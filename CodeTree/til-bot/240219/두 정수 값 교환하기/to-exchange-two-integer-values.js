function swap(a, b){
    [a, b] = [b, a]
    console.log(a, b)
}

const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
swap(a, b);