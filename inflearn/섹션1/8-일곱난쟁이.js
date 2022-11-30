function solution(arr) {
  // let answer = arr; // 얕은복사: 주소만 복사 > arr조작하면 answer도 조작됨(똑같은걸 가리키고 있으니)
  // let sum = answer.reduce(
  //   (previousValue, currentValue) => previousValue + currentValue,
  //   0
  // ); // reviousValue을 처음에 0으로 초기화해라(안해도 됨)
  // let n1, n2;
  // for (let i = 0; i < answer.length; i++) {
  //   n1 = answer[i];
  //   for (let j = 0; j < answer.length; j++) {
  //     if (i !== j) {
  //       n2 = answer[j];
  //     }
  //     if (sum - n1 - n2 === 100) {
  //       answer.splice(i, 1);
  //       answer.splice(j - 1, 1);
  //       break;
  //     }
  //   }
  // }
  // return answer;
  let answer = arr;
  let sum = arr.reduce((a, b) => a + b, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 0) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

// 9명 > 7명 걸러, 키 합 100
// answer 배열에서 랜덤으로 값 가져오고 배열에선 삭제, 차례대로 7개 뽑아서더해
// 만약 7개 합 100넘으면 다시 배열을 arr로 설정하고 랜덤으로(반복)

// 걍 랜덤말고 다 도는거네..
// 2개씩 짝지어서 sum에서 뺐을때 100이면 답
