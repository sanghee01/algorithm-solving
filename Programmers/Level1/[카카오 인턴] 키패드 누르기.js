function solution(numbers, hand) {
  var answer = "";
  let positions = []; // 누를 번호를 좌표로 변환한 값 리스트
  let LPos = [0, 0]; // 왼손 현재 위치
  let RPos = [2, 0]; // 오른손 현재 위치

  // 좌표 값으로 변환
  numbers.forEach((x) => {
    if (x === 7) positions.push([0, 1]);
    else if (x === 4) positions.push([0, 2]);
    else if (x === 1) positions.push([0, 3]);
    else if (x === 0) positions.push([1, 0]);
    else if (x === 8) positions.push([1, 1]);
    else if (x === 5) positions.push([1, 2]);
    else if (x === 2) positions.push([1, 3]);
    else if (x === 9) positions.push([2, 1]);
    else if (x === 6) positions.push([2, 2]);
    else if (x === 3) positions.push([2, 3]);
  });

  positions.forEach((pos) => {
    // 가운데 열일 경우 거리를 구하기 위한 각 tmp 변수
    let LTmp;
    let RTmp;

    // 왼쪽 열인 경우
    if (pos[0] === 0) {
      answer += "L";
      LPos = pos;
      // 오른쪽 열인 경우
    } else if (pos[0] === 2) {
      answer += "R";
      RPos = pos;
      // 가운데 열인 경우 -> 거리 계산
    } else if (pos[0] === 1) {
      LTmp = Math.abs(LPos[1] - pos[1]) + Math.abs(LPos[0] - pos[0]);
      RTmp = Math.abs(RPos[1] - pos[1]) + Math.abs(RPos[0] - pos[0]);

      // 오른손이 더 가까운 경우
      if (LTmp > RTmp) {
        answer += "R";
        RPos = pos;
        // 왼손이 더 가까운 경우
      } else if (LTmp < RTmp) {
        answer += "L";
        LPos = pos;
        // 거리가 가까운 경우 -> 손잡이 손으로
      } else {
        if (hand === "right") {
          answer += "R";
          RPos = pos;
        } else if (hand === "left") {
          answer += "L";
          LPos = pos;
        }
      }
    }
  });

  return answer;
}

console.log([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
