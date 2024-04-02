const input = require("fs").readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
input.shift();

class Weather {
    constructor(date = 0 , day = 0, weather = 0){
        this.date = date;
        this.day = day;
        this.weather = weather;
    }
}


const list = [];
const rainDateList = [];

for(let i = 0; i < n; i++){
    let [date, day, weather] = input[i].split(" ");
    list.push(new Weather(date, day, weather));
    if(list[i].weather === "Rain"){
        rainDateList.push(list[i]);
    }   
}

let minIndex = 0;
const timeList = []
for(let i = 0; i < rainDateList.length; i++){
    let [year, month, dday] = rainDateList[i].date.split("-");
    timeList.push(new Date([year, month, dday].join()).getTime());
    if(timeList[i]<timeList[minIndex]){
        minIndex = i;
    }
}

const answer = rainDateList[minIndex]; 

console.log(answer.date, answer.day, answer.weather)