function solution(new_id) {
  var answer = "";
  let tmpId = "";

  // 1단계 : 대문자 -> 소문자 치환
  new_id = new_id.toLowerCase().split("");

  // 2단계 : 알파벳 소문자, 숫자, 빼기, 밑줄, 마침표 제외 모든 문자 제거
  new_id.forEach((x) => {
    let asciiNum = x.charCodeAt();
    if (
      (asciiNum >= 97 && asciiNum <= 122) ||
      (asciiNum >= 48 && asciiNum <= 57) ||
      asciiNum === 95 ||
      asciiNum === 45 ||
      asciiNum === 46
    )
      tmpId += x;
  });

  // 3단계 : 마침표 2번 이상 연속이면 하나로 치환
  for (let i = 0; i < tmpId.length; i++) {
    if (!(tmpId[i] === "." && tmpId[i] === tmpId[i + 1])) answer += tmpId[i];
  }

  // 4단계 : 마침표 처음 or 마지막이면 제거
  if (answer[0] === ".") answer = answer.slice(1);
  if (answer[answer.length - 1] === ".") answer = answer.slice(0, -1);

  // 5단계 : id가 빈문자열이면 a 대입
  if (answer.length === 0) answer += "a";

  // 6단계 : id가 16자 이상이면 15자 이후 문자들 제거.
  if (answer.length > 15) answer = answer.substr(0, 15);
  if (answer[answer.length - 1] === ".") answer = answer.slice(0, -1); // 마지막 문자 마침표인 경우 제거

  // 7단계 : id가 2자 이하라면, 마지막 문자로 길이 3 될떄까지 반복 붙임
  if (answer.length <= 2) {
    let lastChar = answer[answer.length - 1];
    while (answer.length < 3) answer += lastChar;
  }

  return answer;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
