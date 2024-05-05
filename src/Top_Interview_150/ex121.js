// 121. Best Time to Buy and Sell Stock

import { maxProfit as A } from './ex121.a.js' 
import { maxProfit as B } from './ex121.b.js' 



/**
 * @param {number[]} prices
 * @return {number}
 */
 
const prices = [7,1,4,3,9]
let maxProf = A(prices)
console.log(`[${prices}] ==> ${maxProf} `)
maxProf = B(prices)
console.log(`[${prices}] ==> ${maxProf} `)

