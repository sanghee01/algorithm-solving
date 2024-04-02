const [m1,d1,m2,d2] = require("fs").readFileSync(0).toString().trim().split(" ").map(Number);

const num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function getDays (m,d){
    let days = 0;
    for(let i = 1; i<m; i++){
        days += num_of_days[i]
    }
    days += d;

    return days;
}

console.log(getDays(m2,d2)-getDays(m1,d1)+1);