function printRect(n){
    let cnt = 1;
    for(let i = 0; i< n; i++){
        let str = "";
        for(let j = 0; j<n; j++){
            str += cnt++ + " ";
            if(cnt===10) cnt =1;
        }
        console.log(str);
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
printRect(input);