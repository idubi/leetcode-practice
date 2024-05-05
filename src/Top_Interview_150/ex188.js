// 188. Best Time to Buy and Sell Stock IV

import {sumArray} from '../utils/utils.js'

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */

const mergeTransactions = (t1,t2) => {
    return { idx :t1.idx+'-'+t2.idx  , buy : t1.buy , sell:t2.sell ,  profit: (t2.sell-t1.buy)}
}

const generatePairsAndReduceTransactions = (transactions) => {
    let pairs = []
    for (let i=0;i<transactions.length-1;i++){
        let mergeTransaction = mergeTransactions(transactions[i],transactions[i+1])
        if (mergeTransaction.profit > transactions[i].profit &&
              mergeTransaction.profit > transactions[i+1].profit)  {
            pairs.push(mergeTransaction)
        }
    }
    if (pairs.length > 0 ) {
        //sort ascending
        let maxProfitTransaction =  pairs.sort((a,b) => b.profit - a.profit)[0]
        let newTRansactions = transactions.filter((x) => x.idx != maxProfitTransaction.idx.split('-')[0] && x.idx != maxProfitTransaction.idx.split('-')[1])
        maxProfitTransaction.idx =  maxProfitTransaction.idx.split('-')[0]
        newTRansactions.push(maxProfitTransaction)
        newTRansactions.sort((a,b) => a.profit - b.profit)
        return newTRansactions
    }
    else {
        return pairs
    }
}

const reduceTransactions = (transactions,k=0) => {
    if ( k > 0 && transactions.length > k  ) {
        let pairsTransactions = transactions
        while (pairsTransactions.length > k  &&   pairsTransactions.length > 0 ){
            pairsTransactions = generatePairsAndReduceTransactions(pairsTransactions)
        }
        if (pairsTransactions.length===0){
            let sortedTransactions =  transactions.map((x) => Number(x.profit)).sort((a,b)=> b-a)
            return sortedTransactions.slice(0,sortedTransactions.length-k)
        }
        return pairsTransactions.map((x) => x.profit )    
    } else {
         return transactions.map((x) => x.profit )
    }
 
}



var maxProfit = function(k, prices) {
        let buy = prices[0]
        let transactions = []
        prices.slice(1).forEach((x,i) => {
                if (buy<x){
                    // if this is the last ... 
                    let nextValue = prices[Math.min(prices.length-1),i+2]
                    if (nextValue < x || i == prices.length-2) 
                    {
                        transactions.push({idx : i , buy : buy , sell:x ,  profit: (x-buy)})
                        buy = x 
                    }
                } else {
                    buy=x
                }
        })
        return sumArray(reduceTransactions(transactions,k))    
    } 


// let prices =[6,1,6,4,3,0,2]
let prices = [1,3,5,4,3,7,6,9,2,4]
let maxProf = maxProfit(2,prices)
console.log(`[${prices}] ==> ${maxProf} `)

