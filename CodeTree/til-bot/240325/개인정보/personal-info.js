const input = require("fs").readFileSync(0).toString().trim().split("\n");

class Student {
    constructor(name, height, weight){
        this.name = name;
        this.height = height;
        this.weight = weight
    }
}

const students = [];
for(let i =0; i < input.length; i++){
    let [name, height, weight] = input[i].split(" ");
    students.push(new Student(name, Number(height), Number(weight)));
}

console.log("name");
students.sort((a,b)=>{
    if(a.name > b.name) return 1;
    if(a.name < b.name) return -1;
    return 0;
})
students.sort()

students.forEach((student)=> console.log(student.name, student.height, student.weight.toFixed(1)));

console.log();
console.log("height");
students.sort((a,b)=>{
    return b.height - a.height;
})

students.forEach((student)=> console.log(student.name, student.height, student.weight.toFixed(1)));