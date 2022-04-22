// submission1 RT: 144ms Memo: 42.4MB
var twoSum = function (nums, target) {
  let result = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result[0] = i
        result[1] = j
      }
    }
  }
  return result
};

// submission2 RT: 93ms Memo: 42.7MB
var twoSum = function (nums, target) {
  let result = {}
  for (let i = 0; i < nums.length; i++) {
    let remainder = target - nums[i]

    if (remainder in result) {
      return [result[remainder], i]
    }

    result[nums[i]] = i
  }
  return null
};