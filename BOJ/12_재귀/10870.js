const input = Number(
  require("fs").readFileSync("../input.txt").toString().trim()
);

function fibonachi(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonachi(n - 1) + fibonachi(n - 2);
}

console.log(fibonachi(input));
