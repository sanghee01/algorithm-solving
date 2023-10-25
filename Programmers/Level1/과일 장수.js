function solution(k, m, score) {
  let sum = 0;
  let sortScore = score.sort((a, b) => b - a);
  for (let i = m - 1; i < sortScore.length; i += m) {
    sum += sortScore[i] * m;
  }
  return sum;
}

console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));

// splice 사용 시 시간초과
