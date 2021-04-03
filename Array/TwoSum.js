/**
 * Two Sum:
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to
 * target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * Time: O(N)
 * Space: O(N)
 *
**/

function twoSum(nums, target) {
    let valueToIndexMap = {};
    for (let i = 0; i < nums.length; i++) {
        valueToIndexMap[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (valueToIndexMap.hasOwnProperty(diff) && valueToIndexMap[diff] !== i) {
            const index = valueToIndexMap[diff];
            return [i, index];
        }
    }
}

twoSum([2, 7, 11, 15], 9);
