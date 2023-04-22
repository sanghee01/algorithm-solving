function solution(n) {
  let sum = 0;
  let numArr = String(n).split("");
  for (let x of numArr) sum += Number(x);

  return sum;
}

console.log(solution(123));
