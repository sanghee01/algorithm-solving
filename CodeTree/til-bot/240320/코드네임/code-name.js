const input = require("fs").readFileSync(0).toString().trim().split("\n");

class  user {
    constructor(name = 0, score = 0){
        this.name = name;
        this.score = Number(score);
    }
}


const users = Array(input.length).fill(new user());

let min = Number.MAX_SAFE_INTEGER;
let answer;
for(let i = 0; i < input.length; i++){
    let [name, score] = input[i].split(" ");
    users[i] = new user(name, score);

    if(users[i].score < min){
        min = users[i].score;
        answer= users[i]
    }
}

console.log(answer.name, answer.score)