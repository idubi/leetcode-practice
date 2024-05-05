// 169. Majority Element

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if (nums.length===1){
        return nums[0]
    }
    let accum = {}
    let majorElementsValue = Math.trunc(nums.length/2)
    let majorFound = null
    for (let i=0 ;  nums.length-1;i++) {
            let x = nums[i]
            accum[x]=accum[x]+1||0
            if( accum[x] >= majorElementsValue ){
                majorFound = x
                return majorFound
            }
    }
    throw new Error('no majority element found , this is a restriction')
   
};
let nums =[3,2,3]
console.log({nums,majorityElement : majorityElement(nums)});