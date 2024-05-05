// 121. Best Time to Buy and Sell Stock

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit =(prices) => {
    let minPrice = prices[0]
    let profit = 0 ;

    for (let i=1;i<prices.length;i++){
    // prices.slice(1).forEach((price) => {
        let currentProfit = prices[i]-minPrice
        profit = Math.max(profit,currentProfit)
        minPrice = Math.min(minPrice,prices[i])
    };

    return profit
   

};

export {
    maxProfit
}