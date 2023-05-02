function solution(food) {
  var answer = "";
  for (let i = 1; i < food.length; i++) {
    if (food[i] % 2 === 1) food[i] -= 1;
    for (let j = 0; j < food[i] / 2; j++) {
      answer += i;
    }
  }
  answer += 0;
  for (let i = food.length - 1; i > 0; i--) {
    if (food[i] % 2 === 1) food[i] -= 1;
    for (let j = 0; j < food[i] / 2; j++) {
      answer += i;
    }
  }
  return answer;
}

console.log(solution([1, 3, 4, 6]));
