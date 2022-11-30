const input = parseInt(
  require("fs").readFileSync("../input.txt").toString().trim()
);

let num = input;
let sum;
let i = 0;

while (true) {
  i++;

  sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);

  if (input === num) {
    break;
  }
}

console.log(i);

/*
let sum,
  sumUnits,
  newNumber,
  count = 0;

let tens = parseInt(input[0]); // 십의 자리
let units = parseInt(input[1]); // 일의 자리

while (true) {
  sum = String(tens + units);
  // 더한 값이 한자리 수면 숫자 앞에 0붙이기
  if (sum.length == 1) {
    sum = "0" + sum;
  }
  sumUnits = sum[1];
  newNumber = String(units) + sumUnits;
  count++;

  if (input == newNumber) {
    break;
  } else {
    newNumber = String(newNumber);
    tens = parseInt(newNumber[0]);
    units = parseInt(newNumber[1]);
  }
}
console.log(count);
*/
