function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (!answer.includes(numbers[i] + numbers[j]))
        answer.push(numbers[i] + numbers[j]);
    }
  }
  return answer.sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));

// dap = [...new Set(answer)]
// Set을 이용하면 중복 없이 객체을 만들 수 있다.
