// 27. Remove Element

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function(nums, val) {
    
    const tempArr = nums.filter((element) => element !== val )
    let i = 0 
    tempArr.forEach(element => {
        nums[i]=element
        i = i + 1        
    });

    return  tempArr.length
};

 

let nums = [3,2,4,4,4,2,2,3]
let k = removeElement (nums,3)
console.log({nums,k})

