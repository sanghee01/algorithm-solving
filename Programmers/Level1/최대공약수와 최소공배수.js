function solution(n, m) {
  var answer = [];
  let nDivisor = [];
  let mDivisor = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) nDivisor.push(i);
  }
  for (let i = 1; i <= m; i++) {
    if (m % i === 0) mDivisor.push(i);
  }
  const GCD = Math.max(...nDivisor.filter((x) => mDivisor.includes(x)));
  answer.push(GCD);
  answer.push((n * m) / GCD); // 최소공배수 = 두 자연수의 곱 / 최대공약수

  return answer;
}

console.log(solution(3, 12));
