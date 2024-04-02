const input = require("fs").readFileSync(0).toString().trim().split("\n");
const [n, k, t] = input[0].split(" ");
input.shift();
let list = [];

function returnStartT(input){
    for(let x of input){
        if(x.slice(0,t.length)===t) list.push(x);
    }
    list.sort();

    return list;
}

function printIndexK(input,k){
    returnStartT(input);
    
    return list[k-1]

}

console.log(printIndexK(input, k));