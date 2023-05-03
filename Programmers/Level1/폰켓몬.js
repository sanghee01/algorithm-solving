function solution(nums) {
  var answer = 0;
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (!arr.includes(nums[i]) && answer < nums.length / 2) {
      arr.push(nums[i]);
      answer++;
    }
  }
  return answer;
}

// 다른 풀이 - Set 이용 -> Set 이용하면 중복 없이 배열이 만들어진다
function solution2(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}

console.log(solution([3, 1, 2, 3]));
