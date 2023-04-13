function solution(arr) {
  var answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  answer = answer / arr.length;

  return answer;
}

function solution2(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}
