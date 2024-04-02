const [code, color, seconds] = require("fs").readFileSync(0).toString().trim().split(" ");

class Boom {
    constructor(code = 0, color = 0, seconds = 0){
        this.code = code;
        this.color = color;
        this.seconds = seconds;
    }
}

const boom = new Boom(code, color, seconds);
console.log(`code : ${boom.code}`);
console.log(`color : ${boom.color}`);
console.log(`second : ${boom.seconds}`);