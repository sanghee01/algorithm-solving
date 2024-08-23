// 맨처음이 ) X
// 맨마지막이 ( X
// 스택에 남아있으면? X
// pop하는데 스택에 없으면? X
// 짝이 있어야 함
// (이면 스택에 넣고 )이면 pop

function solution(s) {
  let arr = s.split("");
  let stack = [];

  if (arr[0] === ")" || arr.at(-1) === "(") {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") stack.push(arr[i]);
    else if (arr[i] === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  if (stack.length > 0) return false;
  return true;
}

console.log(solution("()()"));
