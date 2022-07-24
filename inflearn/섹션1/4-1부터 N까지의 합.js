/*

function solution(n) {
  let answer = 0;
  answer = factorial(n);

  function factorial(i) {
    if (i === 1) {
      return 1;
    }
    return i * factorial(i - 1);
  }

  return answer;
}

console.log(solution(10));

*/

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    answer += i;
  }
  return answer;
}
console.log(solution(10));
