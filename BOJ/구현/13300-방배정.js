const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number); // N: 학생 수, K: 한 방 최대 인원 수
input.shift();

let answer = 0; //  방의 수

const students = [
  [0, 0, 0, 0, 0, 0], // 여학생
  [0, 0, 0, 0, 0, 0], // 남학생
];

for (let i = 0; i < N; i++) {
  let [S, Y] = input[i].split(" ").map(Number); // S: 성별, Y: 학년

  // 성별에 맞게 각 학년 인덱스에 +1
  if (S === 0) students[0][Y - 1] += 1;
  else students[1][Y - 1] += 1;
}

// 방의 수 구하기
for (let i = 0; i < students.length; i++) {
  for (let j = 0; j < students[i].length; j++) {
    if (students[i][j] > 0) answer += Math.ceil(students[i][j] / K); // 최대 인원수 넘쳐날 시 방 추가(ceil)
  }
}

console.log(answer);
