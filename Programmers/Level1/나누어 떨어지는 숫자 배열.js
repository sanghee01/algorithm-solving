function solution(arr, divisor) {
  var answer = [];
  for (x of arr) {
    if (x % divisor === 0) answer.push(x);
  }
  if (!answer[0]) answer.push(-1);

  return answer.sort((a, b) => a - b);
}

console.log(solution([5, 9, 7, 10], 5));
