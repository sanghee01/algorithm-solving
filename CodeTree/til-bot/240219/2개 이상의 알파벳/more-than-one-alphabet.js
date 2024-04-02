const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

function isAllEqual(a){
    for(let i = 0; i< a.length; i++){
        if(a[i] !== a[0]) return false;
    }
    return true;
}

if(isAllEqual(input)){
    console.log("No");
}else{
    console.log("Yes");
}