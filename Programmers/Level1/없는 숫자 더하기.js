function solution(numbers) {
  let sum = 45;
  for (x of numbers) sum -= x;

  return sum;
}

console.log(solution([5, 8, 4, 0, 6, 7, 9]));
