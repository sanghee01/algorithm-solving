const input = require("fs").readFileSync(0).toString().trim().split("\n");
const n = input[0];
input.shift();

class Student {
    constructor(height, weight, number){
        this.height = height;
        this.weight = weight;
        this.number = number;
    }
}

const students = [];
for(let i = 0; i< n; i++){
    let [height, weight] = input[i].split(" ").map(Number);
    students.push(new Student(height, weight, i+1));
}

function cmp(a, b){
    if(a.height === b.height){
        if(a.weight === b.weight){
            return a.number - b.number;
        }
        return b.weight - a.weight;
    }
    return b.height - a.height;
}

students.sort(cmp);

students.forEach((student) => console.log(student.height, student.weight, student.number));