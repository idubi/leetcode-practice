// 88. Merge Sorted Array
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
    let num1Position = m-1
    let num2Position= n-1
    let currentBackPosition = m+n-1
    
    if (n === 0) {  
        // console.log(nums1)
        return 
    }
    while(currentBackPosition>=0){
        if ( num2Position<0  ||  nums1[num1Position]>nums2[num2Position]){
            nums1[currentBackPosition] = nums1[num1Position]
            num1Position = num1Position -1
        }
        else {
            nums1[currentBackPosition] = nums2[num2Position]
            // num2Position = num2Position > 0 ? num2Position -1 : 0
            num2Position = num2Position - 1
        }
        currentBackPosition = currentBackPosition - 1
    }
    console.log(nums1)
};


merge([1,2,3,0,0,0],3,[2,5,6],3)
merge([1],1,[],0)
merge([0,0,0],0,[1,1,3],3)
 merge([2,0],1,[1],1)
