const [code, spot, time] = require("fs").readFileSync(0).toString().trim().split(" ");

class meeting {
    constructor(code,spot,time){
        this.code = code;
        this.spot = spot;
        this.time = time;
    }    
}

const meeting1 = new meeting(code,spot,time);

console.log(`secret code : ${meeting1.code}`);
console.log(`meeting point : ${meeting1.spot}`);
console.log(`time : ${meeting1.time}`);