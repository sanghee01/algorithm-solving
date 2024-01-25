const input = Number(require("fs").readFileSync("input.txt").toString());

for (let i = 1; i <= input; i++) {
  let starList = "";
  for (let j = input - i; j > 0; j--) {
    starList += " ";
  }
  for (let k = i * 2 - 1; k > 0; k--) {
    starList += "*";
  }

  console.log(starList);
}
