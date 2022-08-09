/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */
function twoSum(input, target) {
  let map = [];
  for (let i = 0; i <= 256; i++) {
    map[i] = -1;
  }

  for (let i = 0; i <= 256; i++) {
    map[input[i]] = i;
  }

  for (let i = 0; i < input.length; i++) {
    const remaining = target - input[i];
    if (map[remaining] !== -1) {
      return [i, map[remaining]];
    }
  }
}
