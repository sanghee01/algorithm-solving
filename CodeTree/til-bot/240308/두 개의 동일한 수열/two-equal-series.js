const input = require("fs").readFileSync(0).toString().trim().split("\n");
let [listA, listB] = [input[1].trim().split(" ").map(Number), input[2].trim().split(" ").map(Number)];

function cmp(a, b){
    return a-b;
}

function isSame(listA, listB){
    listA = listA.sort(cmp).join(" ")
    listB = listB.sort(cmp).join(" ")    

    if(listA === listB) return "Yes"
    else return "No";
}

console.log(isSame(listA, listB))