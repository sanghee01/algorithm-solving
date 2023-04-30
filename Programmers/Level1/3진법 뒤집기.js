function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}

console.log(solution(45));

// n.toString(3) -> 3진수 변환
// parseInt(n,3) -> 3진수를 10진수로 변환
