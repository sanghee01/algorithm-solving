const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

class Stack {
  arr = [];

  push(value) {
    this.arr.push(value);
  }

  pop() {
    if (this.arr.length === 0) {
      return -1;
    }
    return this.arr.pop();
  }

  size() {
    return this.arr.length;
  }

  empty() {
    if (this.arr.length === 0) {
      return 1;
    } else {
      return 0;
    }
  }

  top() {
    if (this.arr.length === 0) {
      return -1;
    }
    return this.arr.at(-1);
  }
}

const stack = new Stack();
let answer = "";

for (let i = 1; i <= input[0]; i++) {
  let [command, value] = input[i].split(" ");
  switch (command) {
    case "push":
      stack.push(value);
      break;
    case "pop":
      answer += stack.pop() + "\n";
      break;
    case "size":
      answer += stack.size() + "\n";
      break;
    case "empty":
      answer += stack.empty() + "\n";
      break;
    case "top":
      answer += stack.top() + "\n";
      break;
  }
}

console.log(answer);
