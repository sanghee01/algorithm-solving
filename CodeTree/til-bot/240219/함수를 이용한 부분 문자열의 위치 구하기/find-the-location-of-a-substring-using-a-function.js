const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const inputStringAim = input[0];
const inputString = input[1]; 

function includeIndex(){
    let cnt = inputString.length;
    let index = 0;
    for(let i = 0; i<inputStringAim.length; i++){
        for(let j = i; j<inputString.length; j++){
            if(cnt !== inputString.length ){
                if(inputStringAim[i] === inputString[j]){
                    cnt--;
                    break;
                }else{
                    cnt = inputString.length;
                }
            }
            if(inputStringAim[i] === inputString[j]){
                index = i;
                cnt--;
                break;
            }
        }
        if(cnt === 0){
            return index;
        }
    }
        return -1
}

console.log(includeIndex())