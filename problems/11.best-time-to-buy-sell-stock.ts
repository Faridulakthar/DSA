// Best mtime to Buy and Sell Stock

function maxProfit(prices: number[]): number {
  let min: number = prices[0] || 0;
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i]! - min > maxProfit) {
      maxProfit = prices[i]! - min;
    }

    if (prices[i]! < min) {
      min = prices[i]!;
    }
  }
  return maxProfit;
}

const stockPrices = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(stockPrices);
console.log("Maximum profit:", profit); 