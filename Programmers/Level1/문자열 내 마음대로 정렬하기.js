function solution(strings, n) {
  strings.sort();
  strings.sort((a, b) => {
    if (a[n] > b[n]) return 1; // 자리 바꿈(내림차순)
    if (a[n] < b[n]) return -1;
  });

  return strings;
}

console.log(solution(["abce", "abcd", "cdx"], 1));
