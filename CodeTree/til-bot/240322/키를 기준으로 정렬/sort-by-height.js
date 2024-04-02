const input = require("fs").readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
input.shift();

class Human{
    constructor(name = 0, tall = 0, weight = 0){
        this.name = name;
        this.tall = tall;
        this.weight = weight;
    }
}

const humans = []

for(let i = 0 ; i<n; i++){
    let [name, tall, weight] = input[i].split(" ");
    humans.push(new Human(name, tall, weight));
}

humans.sort((a,b)=>{
    return a.tall - b.tall;
})

for(let x of humans){
    console.log(x.name, x.tall, x.weight);
}