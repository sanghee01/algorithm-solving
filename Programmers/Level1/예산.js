function solution(d, budget) {
  let count = 0;
  d.sort((a, b) => a - b);
  for (let x of d) {
    budget -= x;
    if (budget >= 0) count++;
    else break;
  }
  return count;
}

console.log(solution([1, 3, 5, 2], 10));
