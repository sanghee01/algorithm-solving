function solution(price, money, count) {
  for (let i = 1; i <= count; i++) {
    money -= price * i;
  }
  return money < 0 ? -money : 0;
}

console.log(solution(3, 32, 4));
