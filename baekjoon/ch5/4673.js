const calc = (n) => {
  let dn = n;
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    dn += parseInt(n[i]);
  }
  return dn;
};

let numbers = [];

for (let i = 1; i < 10000; i++) {
  numbers.push(calc(i));
}

for (let i = 1; i < 10000; i++) {
  if (!numbers.includes(i)) {
    console.log(i);
  }
}
