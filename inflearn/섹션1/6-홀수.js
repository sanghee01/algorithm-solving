/*

// 나의 풀이

function solution(arr) {
  let answer = [],
    odd = [],
    oddSum = 0,
    oddMin = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      odd.push(arr[i]);
    }
  }
  for (let i = 0; i < odd.length; i++) {
    oddSum += odd[i];
    if (odd[i] < oddMin) {
      oddMin = odd[i];
    }
  }
  answer.push(oddSum);
  answer.push(oddMin);

  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

*/

function solution(arr) {
  let answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;
  for (let x of arr) {
    // x가 각 배열 인덱스를 받아옴
    if (x % 2 === 1) {
      sum += x;
      if (x < min) {
        min = x;
      }
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
