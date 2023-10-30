function solution(number, limit, power) {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    const divisors = [];
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        divisors.push(j);
        if (i / j != j) divisors.push(i / j);
      }
    }
    if (divisors.length <= limit) {
      result += divisors.length;
    } else if (divisors.length > limit) {
      result += power;
    }
  }
  return result;
}

console.log(solution(10, 3, 2));
