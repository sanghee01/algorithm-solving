function isExist(m, d){
    const date = [[1,31],[2,28],[3,31],[4,30],[5,31],[6,30],[7,31],[8,31],[9,30],[10,31],[11,30],[12,31]];
    if(m>12) return false
    if(date[m-1][1] >= d) return true;
    
    return false;
}

const fs = require("fs");
const [m, d] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

if(isExist(m,d)){
    console.log("Yes");
}else{
    console.log("No");
}