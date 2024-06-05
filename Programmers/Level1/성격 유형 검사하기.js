function solution(survey, choices) {
  var answer = "";
  const scores = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  // 각 질문에 따른 점수 구하기
  for (let i = 0; i < survey.length; i++) {
    let disAgreeChar = survey[i][0];
    let agreeChar = survey[i][1];

    if (choices[i] === 1) scores[disAgreeChar] += 3;
    else if (choices[i] === 2) scores[disAgreeChar] += 2;
    else if (choices[i] === 3) scores[disAgreeChar] += 1;
    else if (choices[i] === 5) scores[agreeChar] += 1;
    else if (choices[i] === 6) scores[agreeChar] += 2;
    else if (choices[i] === 7) scores[agreeChar] += 3;
  }

  // 각 지표 유형 결정
  answer += scores.R >= scores.T ? "R" : "T";
  answer += scores.C >= scores.F ? "C" : "F";
  answer += scores.J >= scores.M ? "J" : "M";
  answer += scores.A >= scores.N ? "A" : "N";

  return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
