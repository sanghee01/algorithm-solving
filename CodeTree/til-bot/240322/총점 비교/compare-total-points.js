const input = require("fs").readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
input.shift();

function cmp(a, b) {
    return (a.kor + a.eng + a.math) - (b.kor + b.eng + b.math);
}

class Student {
    constructor(name, kor, eng, math) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
}

let students = [];
for(let i =0; i<n; i++){
    let [name, kor, eng, math] = input[i].split(" ");
    students.push(new Student(name, Number(kor), Number(eng), Number(math)));
}
students.sort(cmp);


students.forEach((student)=> {console.log(student.name, student.kor, student.eng, student.math)})