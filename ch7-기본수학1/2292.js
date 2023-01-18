const input = parseInt(require("fs").readFileSync("../input.txt"));
let range = 1,
  block = 1;

while (block < input) {
  block += 6 * range;

  range++;
}

console.log(range);

/* 
1 - 1개
2~7 - 6개
8~19 - 12개
20~37 - 18개
38~61 - 24개

단순하게 생각하면,
2~7번까지는 2번 만에 이동 가능
8~19까지는 3번 만에 이동 가능

해당 범위의 마지막 번호를 기준으로, 입력값이 그 값보다 크면 범위를 +1 해주고,
작으면 그 범위내에 있으므로, 그걸 코드로 표현. (코드 6번째 줄)
*/
