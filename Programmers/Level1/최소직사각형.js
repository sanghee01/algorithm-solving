function solution(sizes) {
  var answer = 0;
  let maxWidth = Number.MIN_SAFE_INTEGER;
  let maxHeight = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1])
      [sizes[i][0], sizes[i][1]] = [sizes[i][1], sizes[i][0]];

    if (sizes[i][0] > maxWidth) maxWidth = sizes[i][0];

    if (sizes[i][1] > maxHeight) maxHeight = sizes[i][1];
  }

  answer = maxWidth * maxHeight;

  return answer;
}

// 방법 2 -  forEach로 w, h 뽑아오고 sort로 w, h 위치 조정, 그 후 max값 구하기
function solution2(sizes) {
  let w = 0;
  let h = 0;
  sizes.forEach((s) => {
    const [a, b] = s.sort((a, b) => a - b);
    if (a > h) h = a;
    if (b > w) w = b;
  });

  return w * h;
}

// 방법 3 - map으로 위치 조절 후 forEach로 max값 구하기
function solution3(sizes) {
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });
  return maxSize[0] * maxSize[1];
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
