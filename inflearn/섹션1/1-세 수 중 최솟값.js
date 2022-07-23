/*

# 나의 풀이 

function solution(a, b, c) {
  let answer;
  if (a < b && a < c) {
    answer = a;
  } else if (b < a && b < c) {
    answer = b;
  } else if (c < a && c < b) {
    answer = c;
  } else {
    answer = a;
  }
  return answer;
}

console.log(solution(2, 5, 1));


# 다른 풀이 - 굳이 안따져도 되는거에서 조건을 따짐
function solution(a, b, c) {
  let answer;
  if (a > b && a > c) {
    if (b > c) {
      answer = c;
    } else {
      answer = b;
    }
  } else if (b > a && b > c) {
    if (a > c) {
      answer = c;
    } else {
      answer = a;
    }
  } else {
    if (a > b) {
      answer = b;
    } else {
      answer = a;
    }
  }

  return answer;
}

console.log(solution(2, 5, 1));

*/

function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
}

console.log(solution(2, 5, 1));
