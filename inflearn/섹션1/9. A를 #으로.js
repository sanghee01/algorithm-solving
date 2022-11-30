// function solution(s) {
// let answer = "";
// // answer = s;
// // for (let i = 0; i <= s.length; i++) {
// //   if (answer[i] === "A") {
// //     answer[i] = answer[i].replace("A", "#");
// //   }
// // }
// // console.log(answer);
// answer = s.replace(/A/g, "#");
// return answer;
function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x === "A") {
      answer += "#";
    } else answer += x;
  }
  return answer;
}
// }

let str = "BANANA";
console.log(solution(str));

// 문제 착각 - 대문자를 만나면 #으로, 근데 애초에 이것도 답이 안됐음
// function solution(s) {
//   let answer = "";
//   answer = s.toUpperCase();
//   for (let i = 0; i <= s.length; i++) {
//     if (answer[i] === s[i]) {
//       answer[i] = "#";
//     }
//   }
//   console.log(answer);
//   return answer;
// }

// let str = "bANANA";
// console.log(solution(str));

// string은 + 하면 추가, g : 글로벌 // 대문자
