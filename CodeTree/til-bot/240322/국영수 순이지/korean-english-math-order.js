const input = require("fs").readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
input.shift();

function cmp(a, b){
    if(a.kor === b.kor){
        if(a.eng === b.eng){
            return b.math - a.math;
        }
        return b.eng - a.eng;
    }
    return b.kor - a.kor;
}

class Student {
    constructor(name = 0, kor = 0, eng = 0, math = 0){
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
}

const students = []

for(let i =0; i< n; i++){
    let [name, kor, eng, math] = input[i].split(" ");
    students.push(new Student(name,Number(kor), Number(eng), Number(math)));
}

students.sort(cmp);

students.forEach((student) => { console.log(student.name, student.kor, student.eng, student.math)})