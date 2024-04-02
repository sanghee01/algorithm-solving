const [m1,d1,m2,d2] = require("fs").readFileSync(0).toString().trim().split(" ").map(Number);

const num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const week = ["Mon", "Tue","Wed","Thu","Fri","Sat","Sun"];
let answer;

function getDay(m,d){
    let day = 0;
    for(let i = 1; i<m;i++){
        day += num_of_days[i];
    }
    day += d;

    return day;
}

const interDays = getDay(m2,d2) - getDay(m1,d1);

if(interDays >= 0){
    answer = week[interDays%7];
}else{
    answer = week[week.length - Math.abs(interDays)%7]
}
console.log(answer);


// 날짜 구해서 빼고 나누기 7 하면 될듯.
// 나누기 7해서 나머지 값에 따라 요일 결정

// m2,d2 - m1,d1 -> 마이너스면 배열 뒤에서부터 검색
// 플러스면 그대로