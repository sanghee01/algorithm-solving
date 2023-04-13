const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

const T = parseInt(input[0]);
let H, W, N;
let floor, roomOrder;
let arr = [];

for (let i = 0; i < T; i++) {
  arr[i] = input[i + 1].trim().split(" ");
  H = arr[i][0];
  W = arr[i][1];
  N = arr[i][2];
  roomOrder = Math.ceil(N / H).toString();
  floor = Math.ceil(N % H).toString();
  if (floor == "0") {
    floor = H;
  }

  if (roomOrder < 10) {
    roomOrder = "0" + roomOrder;
  }
  console.log(floor + roomOrder);
}
