function solution(a, b, n) {
  var answer = 0;
  let empties = n;

  while (!(empties < a)) {
    answer += Math.floor(empties / a) * b;
    empties = Math.floor(empties / a) * b + (empties % a);
  }

  return answer;
}

console.log(solution(3, 2, 20));
