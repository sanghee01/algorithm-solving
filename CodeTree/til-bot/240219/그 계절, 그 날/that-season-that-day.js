function isYunNyun(y){
    if(y % 4 === 0 && y % 400 === 0) return true;
    if(y % 4 === 0 && y % 100 === 0) return false;
    if(y % 4 === 0) return true;
    return false;
}

function lastDayIs(y,m,d){
    if (m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12){
        if (d <= 31) return true;
    } else if(m === 2 && isYunNyun(y)){
        if (d <= 29) return true;
    } else if(m === 2){
        if (d <= 28) return true;
    } else {
        if (d <= 30) return true;
    }
    return false;
}

function judgeDay(y,m,d){
    if(m<=12 && lastDayIs(y,m,d)) return true;

    return false;
}

function whatSeason(y,m,d){
    let season;
    if(!judgeDay(y,m,d)){
        season = -1;
        return season;
    }

    if(m>=3 && m<=5){
        season = "Spring";
    }else if(m>=6 && m<=8){
        season = "Summer";
    }else if(m>=9 && m<=11){
        season = "Fall";
    }else if(m === 12 || m>=1 && m<=2){
        season = "Winter";
    }

    return season;
}

const fs = require("fs");
const [y, m, d] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
console.log(whatSeason(y,m,d));