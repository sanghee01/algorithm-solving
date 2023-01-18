let text = input.split("");
let count = 0;
let array = [];
for (let i = 0; i < input.length + 2; i++) {
  if (text[i - 2] == "d" && text[i - 1] == "z" && text[i] == "=") {
    array.push(text.slice(i - 2, i + 1).join(""));
    delete text[i - 2];
    delete text[i - 1];
    delete text[i];
    count++;
  } else if (
    (text[i - 1] == "c" && text[i] == "=") ||
    (text[i - 1] == "c" && text[i] == "-") ||
    (text[i - 1] == "d" && text[i] == "-") ||
    (text[i - 1] == "l" && text[i] == "j") ||
    (text[i - 1] == "n" && text[i] == "j") ||
    (text[i - 1] == "s" && text[i] == "=") ||
    (text[i - 1] == "z" && text[i] == "=")
  ) {
    array.push(text.slice(i - 1, i + 1).join(""));
    delete text[i - 1];
    delete text[i];
    count++;
  }
}

for (let i = 0; i < text.length; i++) {
  if (text[i]) {
    count++;
  }
}

console.log(count);

/*
다른 풀이

const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("");
let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let count = 0;

while (true) {
  if (croatia.includes(input.slice(0, 3).join(""))) {
    input.splice(0, 3);
    count++;
  } else if (croatia.includes(input.slice(0, 2).join(""))) {
    input.splice(0, 2);
    count++;
  } else {
    input.splice(0, 1);
    count++;
  }
  if (input.length === 0) {
    console.log(count);
    break;
  }
}

*/

/*
다른풀이2 - 정규식 이용

const input = require("fs").readFileSync("../input.txt").toString().trim();
let word = input;
const regex = [/lj/g, /c=/g, /c-/g, /dz=/g, /d-/g, /nj/g, /s=/g, /z=/g];

regex.map((ele) => (word = word.replace(ele, "1")));
console.log(word.length);

*/
