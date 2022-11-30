const input = parseInt(
  require("fs").readFileSync("../input.txt").toString().trim()
);

for (let i = 1; i <= input; i++) {
  for (let j = 0; j < i; j++) {
    process.stdout.write("*");
  }
  console.log("");
}
