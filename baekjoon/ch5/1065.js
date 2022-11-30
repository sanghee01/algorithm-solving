const input = parseInt(require("fs").readFileSync("../input.txt").toString());

let cnt = 0;
for (let i = 1; i <= input; i++) {
  num = i.toString();
  if (
    num.length == 1 ||
    num.length == 2 ||
    (num.length == 3 && num[2] - num[1] == num[1] - num[0])
  ) {
    cnt++;
  }
}
console.log(cnt);
