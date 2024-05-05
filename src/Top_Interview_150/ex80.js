// 80. Remove Duplicates from Sorted Array II


/**
 * @param {number[]} nums
 * @return {number}
 */

const flushArrayToInplaceArray = (fromArray,inPlaceArray) => {
    const lenFromArray = fromArray.length

    fromArray.forEach((x,i) => {
        inPlaceArray[i] =  x
       })
}

// var removeDuplicates = function(nums) {
//     let existingValues = new Set([])
//     const noDupArray = []
//     let doewValExistAlreadyOnce = false
//     nums.forEach((val) => 
//                     {   if ( !doewValExistAlreadyOnce || !existingValues.has(val) ){
//                             noDupArray.push(val)
//                             doewValExistAlreadyOnce = existingValues.has(val)
//                             existingValues.add(val)                            
//                         } 
//                     }  
//             )
//     flushArrayToInplaceArray(noDupArray,nums)
//     return noDupArray.length
// };




// var removeDuplicates = function(nums) {
    
//     let doesValExistAlreadyOnce = false
//     let lastValue = null

//     const noDupArray = []
//     nums.forEach((val) => 
//                     {   if ( val!==lastValue || !doesValExistAlreadyOnce ){
//                             noDupArray.push(val)
//                             doesValExistAlreadyOnce = val === lastValue 
//                             lastValue = val 
//                         } 
//                     }  
//             )
//     flushArrayToInplaceArray(noDupArray,nums)
//     return noDupArray.length
// };



var removeDuplicates = function(nums) {
    
    let currentChangePosition = 0
    let prevVal = null
    let lastValue = null

    const noDupArray = []
    nums.forEach((val) => 
                    {
                           if ( val!==lastValue || val!==prevVal ){
                            prevVal = lastValue
                            lastValue = val
                            nums[currentChangePosition++]=val
                        } 
                    }  
            )
    
    return currentChangePosition
};




let nums =[1,1,1,2,2,3]
let k = removeDuplicates (nums)
console.log({nums,k})