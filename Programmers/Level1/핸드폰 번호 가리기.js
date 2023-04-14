function solution(phone_number) {
  var answer = "";
  let number = [...phone_number];

  for (let i = 0; i < number.length - 4; i++) {
    number[i] = "*";
  }

  answer = number.join("");

  return answer;
}

console.log(solution("01033334444"));
