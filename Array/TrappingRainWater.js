/**
 * Trapping Rain Water
 *
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water
 * it can trap after raining.
 *
 * Time: O(n)
 * Space: O(n)
 *
 **/
function TrappingRainWater(height) {
    if (height.length === 0) {
        return 0;
    }
    let leftMax = [];
    let rightMax = [];
    let rainWater = 0;
    leftMax[0] = height[0];
    for (let i = 1; i < height.length; i++) {
        leftMax[i] = Math.max(height[i], leftMax[i - 1]);
    }
    rightMax[height.length - 1] = height[height.length - 1];
    for (let i = height.length - 2; i >= 0; i--) {
        rightMax[i] = Math.max(height[i], rightMax[i + 1]);
    }
    for (let i = 0; i < height.length; i++) {
        rainWater += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    return rainWater;
}

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
TrappingRainWater(height);
