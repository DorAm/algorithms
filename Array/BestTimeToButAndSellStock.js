/**
 * Best Time to Buy and Sell Stock:
 *
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the
 * future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve
 * any profit, return 0.
 *
 * Time: O(n)
 * Space: O(1)
 **/

function bestTimeToBuyAndSellStock(prices) {
    let maxProfit = 0;
    let minPrice = Number.MAX_VALUE;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }
    return maxProfit;
}

let prices = [7, 1, 5, 3, 6, 4];
bestTimeToBuyAndSellStock(prices);
