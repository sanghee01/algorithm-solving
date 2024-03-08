const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();

let count = 0;

function recursion(s, l, r) {
  count++;
  if (l >= r) return 1;
  else if (s[l] != s[r]) return 0;
  else return recursion(s, l + 1, r - 1);
}

function isPalindrome(s) {
  count = 0;
  return recursion(s, 0, s.length - 1);
}

for (let x of input) {
  console.log(isPalindrome(x), count);
}
