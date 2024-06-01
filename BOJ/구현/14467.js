const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]); // 관찰 횟수
input.shift();

const observeList = []; // 관찰 리스트

input.map((x) => observeList.push(x.split(" ").map(Number))); // 관찰리스트 2차원 배열 형태로 저장

let count = 0; // 이동 횟수(최종 답안)

// 1 ~ 10번 소 차례대로 이동 횟수 찾기
for (let i = 1; i <= 10; i++) {
  let positionList = []; // i번 소 이동 리스트
  observeList.forEach((x) => {
    if (x[0] === i) positionList.push(x[1]);
  });

  // i번 소 이동 횟수 1번 이상일 시, 이동 횟수 찾기
  if (positionList.length > 1) {
    let nowPosition = positionList[0];
    for (let j = 1; j < positionList.length; j++) {
      if (nowPosition !== positionList[j]) {
        count++;
        nowPosition = positionList[j];
      }
    }
  }
}

console.log(count);
