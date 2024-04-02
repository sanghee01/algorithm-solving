function calculate(a, o, c){
    if(o === "+"){
        console.log(`${a} ${o} ${c} = ${a+c}`)
    }else if(o === "-"){
        console.log(`${a} ${o} ${c} = ${a-c}`)
    }else if(o === "/"){
        console.log(`${a} ${o} ${c} = ${parseInt(a/c)}`)
    }else if(o === "*"){
        console.log(`${a} ${o} ${c} = ${a*c}`)
    }else{
        console.log("False");
    }
}

const fs = require("fs");
let [a, o, c] = fs.readFileSync(0).toString().trim().split(" ");
a = Number(a);
c = Number(c);
calculate(a,o,c);