/*

# 나의 풀이 - max 이용 안함

function solution(a, b, c) {
  let answer = "YES",
    max;
  if (
    (a > b && a > c && a >= b + c) ||
    (b > c && b > a && b >= a + c) ||
    (c > a && c > b && c >= a + b)
  ) {
    answer = "NO";
  }
  return answer;
}

console.log(solution(6, 7, 11));

*/

function solution(a, b, c) {
  let answer = "YES",
    max;
  let sum = a + b + c;
  if (a > b) {
    max = a;
  } else {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  if (max >= sum - max) {
    answer = "NO";
  }
  return answer;
}

console.log(solution(6, 7, 11));
