const input = Number(require("fs").readFileSync("input.txt").toString());

for (let i = 1; i <= input; i++) {
  let starList = "";
  for (let j = 0; j < i; j++) {
    starList += "*";
  }
  console.log(starList);
}
