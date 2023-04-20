function solution(s) {
  var answer = true;
  let pCount = 0;
  let yCount = 0;

  s = s.toLowerCase();

  for (x of s) {
    if (x === "p") pCount++;
    else if (x === "y") yCount++;
  }

  if (pCount !== yCount) answer = false;

  return answer;
}

console.log(solution("PyY"));
