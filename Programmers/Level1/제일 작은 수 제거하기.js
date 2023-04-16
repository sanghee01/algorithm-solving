function solution(arr) {
  var answer = arr;
  answer.splice(answer.indexOf(Math.min(...answer)), 1);
  if (!answer[0]) answer.push(-1);
  return answer;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([10]));
