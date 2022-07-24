/*

// 나의 풀이

function solution(arr) {
  let answer = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (answer > arr[i]) {
      answer = arr[i];
    }
  }
  return answer;
}

let arr = [5, 7, 15, 3, 2, 9, 11];
console.log(solution(arr));
*/

/*

// 풀이 1

function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER; // 안정적인 가장 큰 값
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return answer;
}

let arr = [5, 7, 15, 3, 2, 9, 11];
console.log(solution(arr));

*/

// 내장함수 이용
function solution(arr) {
  let answer = Math.min(...arr); // ...는 배열을 인자 각각으로 펼쳐줌, 최댓값은  max
  // 전개연산자 안쓰려면 Math.min.apply(null, arr); 첫번째 인자: 객체(this), 두번째 인자: 배열. 근데 걍 전개연산자 쓰는걸 추천함
  return answer;
}

let arr = [5, 7, 15, 3, 2, 9, 11];
console.log(solution(arr));
