import * as utils from  '../utils/utils.js'


// 26. Remove Duplicates from Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */


var removeDuplicates = function(nums) {

    const noDupArray = new Set([])
    nums.forEach(x => noDupArray.add(x))
    
    utils.flushArrayToInplaceArray(noDupArray,nums)
    return noDupArray.size
};

let nums = [3,4,4,4,5,5,5,6,6,7,8,9]
let k = removeDuplicates (nums)
console.log({nums,k})