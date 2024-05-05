// 121. Best Time to Buy and Sell Stock

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let maxValueAccomulator = 0
    const maxValuesAccomulatedArray=[]
    const pricesLength = prices.length 

    prices.reverse().forEach ((x) => {
        maxValuesAccomulatedArray.push(Math.max(maxValueAccomulator,x))
        maxValueAccomulator = Math.max(maxValueAccomulator,x)
    })
    // prices is reversed accomulation
    const revenues =  prices.reverse().map((x,i)=> 
        x<=maxValuesAccomulatedArray[pricesLength-i-1]?maxValuesAccomulatedArray[pricesLength-i-1]-x:0
    )

    return Math.max(...revenues)

};

export {
    maxProfit
}
 



