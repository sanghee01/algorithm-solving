const input = require("fs").readFileSync(0).toString().trim().split("\n");
const [n, k] = input[0].split(" ").map(Number);
const list = input[1].split(" ").map(Number);

function getTopK(list,index){
    list.sort((a,b)=> {return a-b});
    return list[index];
}

console.log(getTopK(list,k-1));