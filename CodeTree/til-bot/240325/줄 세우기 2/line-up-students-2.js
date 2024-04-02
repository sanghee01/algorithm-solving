const input = require("fs").readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
input.shift();

class Student {
    constructor(height, weight, number){
        this.height = height;
        this.weight = weight;
        this.number = number;
    }
}

const students = [];
for(let i = 0; i<n;i++){
    let [height, weight] = input[i].split(" ").map(Number);
    students.push(new Student(height,weight, i+1));
}

students.sort((a,b)=>{
    if(a.height===b.height) return b.weight-a.weight;
    return a.height-b.height;
})

students.forEach((student)=>console.log(student.height, student.weight, student.number));