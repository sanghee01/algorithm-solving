function solution(s) {
  var answer = [];
  s = s.split(" ");
  for (let i = 0; i < s.length; i++) {
    s[i] = s[i].split("");
    for (let j = 0; j < s[i].length; j++) {
      if (j === 0 || (j !== 0 && j % 2 === 0)) {
        s[i][j] = s[i][j].toUpperCase();
      } else {
        s[i][j] = s[i][j].toLowerCase();
      }
    }
    answer.push(s[i].join(""));
  }

  return answer.join(" ");
}

console.log(solution("tRy hello world "));
