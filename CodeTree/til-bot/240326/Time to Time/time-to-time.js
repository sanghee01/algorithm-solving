const [a,b,c,d] = require("fs").readFileSync(0).toString().trim().split(" ").map(Number);

function getMinutes(a,b,c,d){
    const time1 = a*60 + b;
    const time2 = c*60 + d;

    return time2- time1;
}

console.log(getMinutes(a,b,c,d));