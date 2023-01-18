// 풀다가 맒

const input = Number(
  require("fs").readFileSync("../input.txt").toString().trim()
);

for (let i = 0; i < input; i++) {}
console.log(input);

/*
  1/1 - 
  1/2 - 2/1 - 
  3/1 - 2/2 - 1/3 - 
  1/4 - 2/3 - 3/2 - 4/1 -

  
  0,0 
  - 0,1 - 1,0 
  - 2,0 - 1,1 - 0,2 
  - 0,3 - 1,2 - 2,1 - 3,0 
  - 4,0
 
 분자: 1 1 2 3 2 1 1 2 3
 분모: 1 2 1 1 2 3 4 3 2
  */
