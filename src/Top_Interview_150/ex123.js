// 123. Best Time to Buy and Sell Stock III

import {sumArray} from '../utils/utils.js'
/**
 * @param {number[]} prices
 * @return {number}
 */

 
var maxProfit = function(prices) {
    let pricesSize = prices.length-1

    let minPriceFromDay1 = prices[0]
    let maxPriceFromDDay = prices[pricesSize]

    let maxProfitFromDay1 = 0;
    let maxProfitFromDDay = 0;

    const arrMaxProfitsFromDay1 = [0];
    const arrMaxProfitFromDDayToLastDay = [0]

    for(let i=1;i<=pricesSize;i++){
        minPriceFromDay1 = Math.min(minPriceFromDay1,prices[i])
        maxProfitFromDay1 = Math.max(maxProfitFromDay1,prices[i]-minPriceFromDay1)
        arrMaxProfitsFromDay1.push(maxProfitFromDay1)

        maxPriceFromDDay = Math.max(prices[pricesSize-i],maxPriceFromDDay)
        maxProfitFromDDay = Math.max(maxProfitFromDDay,maxPriceFromDDay - prices[pricesSize-i])
        arrMaxProfitFromDDayToLastDay.push(maxProfitFromDDay)
    }
    // since it is accumulated from last to start
    arrMaxProfitFromDDayToLastDay.reverse()
    const profits = prices.map((x,i) => arrMaxProfitsFromDay1[i]+ arrMaxProfitFromDDayToLastDay[i])
    return Math.max(...profits)
};



// const prices = [7,1,5,3,6,4]
//  const prices = [3,3,5,0,0,3,1,4]
//   const prices = [1,2,3,4,5]
//  const prices = [14,9,10,12,4,8,1,16] //19
  const prices = [1,2,4,2,5,7,2,4,9,0] //13

  /** [0, 0, 5, 7, 2, 4, 7, 5, 7, 8]
   *     [1,2,4,2,5,7,2,4,9,0]
   * =>  [0,1,3,3,4,6,6,6,8,8] (max profit from left)
   * <=  [8,7,7,7,7,7,7,5,0,0] (max profit from current day)
   * -------------->|==> 6+7 = 13 max profit for 2 possibilities
   */


let maxProf = maxProfit(prices)
console.log(`[${prices}] ==> ${maxProf} `)

