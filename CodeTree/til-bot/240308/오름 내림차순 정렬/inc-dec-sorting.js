const input = require("fs").readFileSync(0).toString().trim().split("\n");
const list = input[1].split(" ").map(Number);

function cmp(a, b){
    return a - b;
}
console.log(...list.sort(cmp));
console.log(...list.sort(cmp).reverse());