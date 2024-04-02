const input = require("fs").readFileSync(0).toString().trim().split("\n");
const [m1,d1,m2,d2] = input[0].split(" ").map(Number);
const day = input[1]

const num_of_days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const week = ["Mon", "Tue","Wed","Thu","Fri","Sat","Sun"];
const searchWeekIndex = week.indexOf(day);

function getDays(m,d){
    let days = 0;
    for(let i =1; i<m; i++){
        days += num_of_days[i];
    }
    days += d;

    return days;
}

function getCount(interDays){
    let count = 0;
    for(let i = 0; i<=interDays; i++){
        if(i%7 === searchWeekIndex) count ++;
    }

    return count;
}

let interDays = getDays(m2,d2)-getDays(m1,d1);

console.log(getCount(interDays));