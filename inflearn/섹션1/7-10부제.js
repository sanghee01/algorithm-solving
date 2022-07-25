function solution(day, arr) {
  let answer = 0;
  for (let num of arr) {
    if (day === num % 10) {
      answer++;
    }
  }
  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));

// string으로 변환 후, 두번째 자리 숫자 빼오고 다시 Number로 형변환
// 두번째 자리 숫자만 가져오는 모듈이 있나?, 아니면 10으로 나눠서 소숫점만 가져오는 모듈?
// -> 10으로 나눠서 나머지만 갖고오면 되지 않나?! ㅇㅋㅇㅋ
