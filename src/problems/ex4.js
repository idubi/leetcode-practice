
// 4. Median of Two Sorted Arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const getMedianFromArray = (arr) => {
    return arr.length%2!==0?arr[(arr.length-1)/2]:((arr[arr.length/2]+arr[arr.length/2-1])/2)
}

const merge2SortedArrays = (arr1,arr2) => {
    let lastArr2Idx = 0  
    const arr2Size = arr2.length-1
    let mergedArray = []
    arr1.forEach((sortedElement) => {
            if (arr2Size >= lastArr2Idx && arr2[lastArr2Idx]<=sortedElement){
                while (arr2Size >= lastArr2Idx && arr2[lastArr2Idx]<=sortedElement){
                    mergedArray.push(arr2[lastArr2Idx++])
                }  
                mergedArray.push(sortedElement)
            } 
            else {
                mergedArray.push(sortedElement)
            }
        });
    if (arr2Size >= lastArr2Idx){
        let arr2LeftOver =  arr2.slice(lastArr2Idx,arr2Size+1)
        mergedArray = mergedArray.concat(arr2LeftOver)
    }
    return mergedArray

}

var findMedianSortedArrays = function(nums1, nums2) {
    let merged=merge2SortedArrays(nums1,nums2)
    return getMedianFromArray(merged)
};


// let  nums1 = [1,6],nums2=[3,4,5]
let  nums1 = [1,2],nums2=[3,4]

let median = findMedianSortedArrays(nums1,nums2)

console.log({nums1,nums2,median}) 
