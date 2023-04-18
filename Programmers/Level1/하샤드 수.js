function solution(x) {
  var answer = true;
  let digits = [...String(x)].map((i) => Number(i));
  let sumDigits = digits.reduce((sum, i) => sum + +i);
  if (x % sumDigits !== 0) answer = false;
  return answer;
}

console.log(solution(12));
