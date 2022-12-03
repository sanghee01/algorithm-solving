// 풀다가 맒

const input = parseInt(require("fs").readFileSync("../input.txt"));
let room = 0;

room = Math.ceil(input / 6);

console.log(room);

/* 
방이 6개씩 많아짐

1 

6  

12 

18 

24


*/
