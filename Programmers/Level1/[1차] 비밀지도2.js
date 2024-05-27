function solution(n, arr1, arr2) {
  let map1 = arr1;
  let map2 = arr2;
  let answer = [];

  // 이진수 변환 후, n개에 맞춰서 앞에 0을 채워서 반환
  map1 = map1.map((num) => num.toString(2).padStart(n, "0"));
  map2 = map2.map((num) => num.toString(2).padStart(n, "0"));

  // n개의 행 연산
  for (let i = 0; i < n; i++) {
    let line = "";
    let [map1Index, map2Index] = [map1[i], map2[i]];
    // 각 행의 지도값 비교
    for (let j = 0; j < n; j++) {
      if (map1Index[j] === "1" || map2Index[j] === "1") line += "#";
      else line += " ";
    }
    answer.push(line);
  }
  return answer;
}

console.log(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
