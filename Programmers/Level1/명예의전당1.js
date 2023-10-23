function solution(k, score) {
  const list = [];
  const answer = [];
  score.forEach((currentScore) => {
    if (list.length < k) {
      list.push(currentScore);
    } else if (currentScore > Math.min(...list)) {
      list.splice(list.indexOf(Math.min(...list)), 1, currentScore);
    }
    answer.push(Math.min(...list));
  });
  return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
