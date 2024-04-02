const input = require("fs").readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
input.shift();

class Spot {
    constructor(x,y,number){
        this.x = x;
        this.y = y;
        this.number = number;
    }
}


const spots = []
for(let i =0; i<n;i++){
    let [x,y] = input[i].split(" ");
    spots.push(new Spot(Number(x), Number(y), i+1));
}

spots.sort((a,b)=>{
    return (Math.abs(a.x) + Math.abs(a.y)) - (Math.abs(b.x) + Math.abs(b.y))
})

spots.forEach((spot)=> console.log(spot.number));