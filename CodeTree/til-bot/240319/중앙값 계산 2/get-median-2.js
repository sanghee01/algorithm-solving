const input = require("fs").readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const list = input[1].split(" ").map(Number);

function middleNum(list){
    const currentList = [];
    for(let i = 1; i<=n;i++){
        let sortList; 
        currentList.push(list[i-1]);
        sortList = currentList.sort((a,b)=>{return a-b})
        if(i % 2 === 1){
            process.stdout.write(currentList[Math.floor(currentList.length/2)] + " ");
        }
    }
}

middleNum(list);