function solution(M, N) {
  let max = Math.max(M, N);
  let min = Math.min(M, N);
  var answer = min - 1;
  answer += min * (max - 1);

  return answer;
}

console.log(solution(2, 5));
