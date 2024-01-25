const input = Number(require("fs").readFileSync("input.txt").toString());

for (let i = 0; i < input; i++) {
  let starList = "";
  for (let k = input; k > i; k--) {
    starList += "*";
  }
  console.log(starList);
}
