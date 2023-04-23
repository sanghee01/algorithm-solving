function solution(absolutes, signs) {
  let sum = 0;
  for (let i = 0; i < absolutes.length; i++) {
    sum = sum + absolutes[i] * (signs[i] ? 1 : -1);
  }
  return sum;
}

console.log(solution([4, 7, 12], [true, false, true]));
