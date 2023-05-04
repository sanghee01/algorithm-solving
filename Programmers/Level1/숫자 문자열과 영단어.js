function solution(s) {
  var answer = s;
  let numList = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < numList.length; i++) {
    answer = answer.replaceAll(numList[i], i);
  }

  return Number(answer);
}

console.log(solution("zero21zerooneone"));
