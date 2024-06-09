function solution(dartResult) {
  let sum = 0;
  let score; // 각 점수
  let scoreList = [0]; // 점수 리스트

  for (let i = 0; i < dartResult.length; i++) {
    // 숫자 판별 로직
    if (!isNaN(dartResult[i])) {
      if (dartResult[i] === "1" && dartResult[i + 1] === "0") {
        score = 10;
        i++;
      } else {
        score = Number(dartResult[i]);
      }
    }

    // 보너스 설정
    if (dartResult[i] === "S") {
      scoreList.push(Math.pow(score, 1));
    } else if (dartResult[i] === "D") {
      scoreList.push(Math.pow(score, 2));
    } else if (dartResult[i] === "T") {
      scoreList.push(Math.pow(score, 3));
    }
    // 옵션 설정
    else if (dartResult[i] === "*") {
      score =
        2 * (scoreList[scoreList.length - 1] + scoreList[scoreList.length - 2]);
    } else if (dartResult[i] === "#") {
      score = -1 * scoreList[scoreList.length - 1];
    } else {
      score = scoreList[scoreList.length - 1];
    }
    sum += score;
  }

  return sum;
}

console.log("1D2S3T*");
