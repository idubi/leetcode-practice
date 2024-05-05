// 42. Trapping Rain Water

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const heightSize = height.length - 1
    let lmax = height[0]     // left max
    let rmax = height[heightSize] //right max
    const hightCalculatorFromStart = [lmax]
    const hightCalculatorFromEnd = [rmax]
    height.slice(1).forEach( (x, i) => {        
        lmax = Math.max(lmax,x)
        hightCalculatorFromStart.push(lmax)        
        rmax = Math.max(rmax,height[heightSize-i-1])
        hightCalculatorFromEnd.push(rmax)        
    })

    let accumulator = 0
    height.slice(1,heightSize).forEach((x,i) => {
        accumulator=accumulator + Math.min(hightCalculatorFromStart[i+1],hightCalculatorFromEnd[heightSize-i-1])-height[i+1]
    }) 

    return accumulator
};

// heightAray                                 [1,0,2,1,0,1,3,2,1,2,1]
// ==> (A)  hightCalculatorFromStart          [1,1,2,2,2,2,3,3,3,3,3] 
// ==> (B)  hightCalculatorFromEnd       <==  [3,3,3,3,3,3,3,2,2,2,1] 
// ==> min(A,B) -  heightAray ==>             [0,1,0,1,2,1,0,0,1,0,0]   ==> (sum)  ==> 6

/**                                             
 *                                                        |X|
 *                                                |X|     |X|X| |X|
 *                                            |X|_|X|X|_|X|X|X|X|X|X|
 *  */ 
// const heightAray = [4,2,0,3,2,5]
const heightAray = [1,0,2,1,0,1,3,2,1,2,1]
let waterVolume = trap(heightAray)
console.log(`water volume of ${heightAray} ==> ${waterVolume}`)