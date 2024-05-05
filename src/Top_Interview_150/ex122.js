// 122. Best Time to Buy and Sell Stock II

import {sumArray} from '../utils/utils.js'
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0]
    let transactions = []
    prices.slice(1).forEach((x) => {
            if (buy<x){
                transactions.push(x-buy)
                buy = x 
            } else {
                buy=x
            }
    })
    return sumArray(transactions)

};

// const prices = [7,1,5,3,6,4]
const prices = [3,3,5,0,0,3,1,4]
let maxProf = maxProfit(prices)
console.log(`[${prices}] ==> ${maxProf} `)

