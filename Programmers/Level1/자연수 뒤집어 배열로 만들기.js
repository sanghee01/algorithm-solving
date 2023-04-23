function solution(n) {
  return [...String(n)].reverse().map((x) => Number(x));
}

console.log(solution(12345));
