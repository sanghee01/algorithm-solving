readFileSync로 txt 파일을 읽어와서 toString과 split을 이용하여 배열로 만들어 input으로 저장하는 것이다.

## 1. 한줄로 입력 받을 때

```js
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let num = Number(input);

for (let i = 1; i <= num; i++) {
  console.log(i);
}
```

## 2. 여러 줄로 입력 받을 때

```js
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let count = input[0];
let numbers = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== "") {
    numbers.push(input[i].split(" "));
  }
}

for (let i = 0; i < numbers.length; i++) {
  let num1 = Number(numbers[i][0]);
  let num2 = Number(numbers[i][1]);

  console.log(num1 + num2);
}
```

<br/>
<br/>
<br/>

---

## 참고 지식

<br/>

- toSring() : 지정된 배열 및 그 요소를 나타내는 문자열 반환

```js
const array1 = [1, 2, "a", "1a"];

console.log(array1.toString());
// expected output: "1,2,a,1a"
```

- split() : 지정한 구분자를 이용하여 여러 개의 문자열로 나눔

```js
const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[3]);
// expected output: "fox"

const chars = str.split("");
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]
```

<br/>
<br/>
