function solution(answers) {
  const stud1 = [1, 2, 3, 4, 5];
  const stud2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const stud3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let correct = [0, 0, 0];
  var answer = [];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === stud1[i % stud1.length]) correct[0]++;
    if (answers[i] === stud2[i % stud2.length]) correct[1]++;
    if (answers[i] === stud3[i % stud3.length]) correct[2]++;
  }

  const maxResult = Math.max(...correct);
  for (let i = 1; i <= 3; i++) {
    if (maxResult === correct[i - 1]) answer.push(i);
  }
  return answer;
}

console.log(solution([4, 4, 5, 5, 1, 2, 2, 2]));
