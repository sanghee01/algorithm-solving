function solution(a, b) {
  var answer = "";
  let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let week = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  let daySum = 0;

  for (let i = 0; i < a - 1; i++) {
    daySum += month[i];
  }
  daySum += b;
  answer = week[daySum % 7];

  return answer;
}

console.log(solution(5, 24));
