function toBinary(n, nums, map) {
  for (let i = 0; i < n; i++) {
    let binary = nums[i].toString(2);
    let lineNum = "";
    for (let i = binary.length; i < n; i++) {
      lineNum += "0";
    }
    lineNum += binary;
    map.push(lineNum);
  }
}

function solution(n, arr1, arr2) {
  var answer = [];
  let arr1Map = [];
  let arr2Map = [];

  toBinary(n, arr1, arr1Map);
  toBinary(n, arr2, arr2Map);

  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j < n; j++) {
      if (arr1Map[i][j] === "1" || arr2Map[i][j] === "1") {
        line += "#";
      } else {
        line += " ";
      }
    }
    answer.push(line);
  }
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
