function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    let arr = [];
    for (let j = commands[i][0] - 1; j < commands[i][1]; j++) {
      arr.push(array[j]);
    }
    arr.sort((a, b) => a - b);
    answer.push(arr[commands[i][2] - 1]);
  }
  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
