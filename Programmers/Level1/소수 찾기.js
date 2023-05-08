function solution(n) {
  let sosu = Array.from({ length: n + 1 }, (v) => true);

  for (let num = 2; num <= Math.sqrt(n); num++) {
    if (sosu[num]) {
      for (let i = num * num; i <= n; i += num) {
        sosu[i] = false;
      }
    }
  }
  const result = sosu.filter((x) => x == true);
  return result.length - 2;
}

console.log(solution(5));
