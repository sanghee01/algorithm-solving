const numberWordList = [
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

function solution(s) {
  let answer = s;

  numberWordList.forEach((x, i) => {
    if (answer.includes(x)) {
      answer = answer.replaceAll(x, i);
    }
  });

  return Number(answer);
}
