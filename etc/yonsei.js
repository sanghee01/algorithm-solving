console.log(`***** Find ODTG such as TOO+TOO+TOO+TOO==GOOD *****

====================
  O    D    T    G
====================`);

let O, D, T, G;

for (let i = 0; i < 10; i++) {
  O = i;
  for (let j = 0; j < 10; j++) {
    D = j;
    if (D === O) {
      D = j + 1;
      if (D === 10) {
        continue;
      }
    }
    for (let k = 0; k < 10; k++) {
      T = k;
      if (T === O && T == D) {
        T = k + 1;
        if (T === 10) {
          continue;
        }
      }
      for (let l = 0; l < 10; l++) {
        G = l;
        if (G === O && G == D && G == T) {
          G = l + 1;
        }
        if (G === 10) {
          break;
        }
        if (
          100 * T +
            10 * O +
            O +
            (100 * T + 10 * O + O) +
            (100 * T + 10 * O + O) +
            (100 * T + 10 * O + O) ==
            1000 * G + 100 * O + 10 * O + D &&
          O !== D &&
          O !== T &&
          O !== G &&
          D !== T &&
          D !== G &&
          T !== G
        ) {
          console.log(`  ${O}    ${D}    ${T}    ${G}`);
        }
      }
    }
  }
}
