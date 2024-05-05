
// 11. Container With Most Water

/**
 * @param {number[]} height
 * @return {number}
 */


const caculateWaterArea = (left,right,height) => {
    return (right-left) * Math.min(height[left],height[right])
}
var maxArea = function(height) {
    
    let left = 0 , right = height.length-1
    let sWater = 0
    while(left<right){
        let tempSWater  = caculateWaterArea(left,right,height)
        if (tempSWater > sWater){
            sWater = tempSWater
        }
        if (height[left]<=height[right]){
            left++ 
        } else {
            right--
        }
    }
    return sWater
};

let height =[1,1]
console.log({height,maxArea:maxArea(height)});