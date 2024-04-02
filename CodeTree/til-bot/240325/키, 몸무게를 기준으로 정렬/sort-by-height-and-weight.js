const input = require("fs").readFileSync(0).toString().trim().split("\n");
const n = input[0];
input.shift();

class Student {
    constructor(name, height, weight){
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

const students = [];
for(let i =0; i<n; i++){
    let [name, height,weight] = input[i].split(" ");
    students.push(new Student(name, Number(height), Number(weight)));
}

function cmp(a,b){
    if(a.height===b.height) return b.weight - a.weight;
    return a.height - b.height
}

students.sort(cmp);
students.forEach((student)=> console.log(student.name, student.height, student.weight));