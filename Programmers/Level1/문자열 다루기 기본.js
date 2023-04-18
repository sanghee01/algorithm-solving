function solution(s) {
  var answer = true;
  let numbers = [...s];
  numbers.forEach((i) => {
    if (isNaN(i)) answer = false;
  });
  if (numbers.length !== 4 && numbers.length !== 6) answer = false;
  return answer;
}

console.log(solution("1312"));

// 지수 형태 조심 ex) "10e1"을 Number로 형변환하면 100이다.
