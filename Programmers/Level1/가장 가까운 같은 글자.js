function solution(s) {
  var answer = [];
  let charIndex = {};
  for (let i = 0; i < s.length; i++) {
    if (!Object.keys(charIndex).includes(s[i])) {
      charIndex[s[i]] = i;
      answer.push(-1);
    } else {
      answer.push(i - charIndex[s[i]]);
      charIndex[s[i]] = i;
    }
  }
  return answer;
}

console.log(solution2("banana"));

// 위와 같이 key - value 방식으로 푸는 방법을 '해시 알고리즘'이라고 하나 봄

/*
object 객체에 특정 key값이 존재하는지 확인하는 법
1) Object.keys(object명).includes('key값');
2) object명.hasOwnProperty("key값");
3) 'in 연산자'를 사용하는 방법도 있지만 이는 프로퍼티도 체크한다는 문제점이 있음. 1,2번 방법으로 사용하는거 권장
*/
