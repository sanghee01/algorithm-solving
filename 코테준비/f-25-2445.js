const N = Number(require("fs").readFileSync("input.txt").toString());

for (let i = 0; i < N - 1; i++) {
  for (let j = 0; j <= N * 2; j++) {
    if (j <= i || j >= N * 2 - i) process.stdout.write("*");
    else process.stdout.write(" ");
  }
  console.log();
}

for (let i = N; i > 0; i--) {
  for (let j = 0; j <= N * 2; j++) {
    if (j <= i || j >= N * 2 - i) process.stdout.write("*");
    else process.stdout.write(" ");
  }
  console.log();
}
