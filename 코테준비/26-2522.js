const N = Number(require("fs").readFileSync("input.txt").toString());

function printStar(n) {
  if (n === 0) return;
  for (let i = 0; i < n; i++) {
    if (i >= n) process.stdout.write("*");
    else process.stdout.write(" ");
  }
  printStar(n - 1);
}

console.log(printStar(N));
