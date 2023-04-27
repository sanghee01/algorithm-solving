function solution(t, p) {
  let arr = [];

  for (let i = 0; i <= t.length - p.length; i++) {
    let num = "";
    for (let j = i; j < i + p.length; j++) {
      num += t[j];
    }
    arr.push(num);
  }
  arr = arr.filter((x) => x <= p);
  return arr.length;
}

console.log(solution("500220839878", "7"));
