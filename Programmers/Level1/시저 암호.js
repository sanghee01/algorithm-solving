function solution(s, n) {
  let ascii;
  for (let i = 0; i < s.length; i++) {
    ascii = s.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) asciiToChar(ascii, n, 90);
    else if (ascii >= 97 && ascii <= 122) asciiToChar(ascii, n, 122);
    else answer += " ";
  }
  return answer;
}

function asciiToChar(x, n, max) {
  if (x + n > max) {
    answer += String.fromCharCode(x + n - 26);
  } else {
    answer += String.fromCharCode(x + n);
  }
}

let answer = "";
console.log(solution("a B z", 4));
