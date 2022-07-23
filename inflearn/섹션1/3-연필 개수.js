/*

# 나의 풀이 

function solution(n) {
  let answer;
  if (n % 12 != 0) {
    answer = parseInt(n / 12) + 1;
  } else {
    answer = parseInt(n / 12);
  }
  return answer;
}

console.log(solution(25));

// console.log(parseInt(4.9));
// console.log(13 / 2);
// console.log(13 % 2);
// js는 나눗셈하면 나머지까지 나옴 -> 몫만 보고싶으면 정수형으로 바꿔

*/

// Math 메서드 - ceil : 올림함수, floor: 내림함수, round: 반올림, srqt: 제곱근
function solution(n) {
  let answer = Math.ceil(n / 12);
  return answer;
}

console.log(solution(25));
