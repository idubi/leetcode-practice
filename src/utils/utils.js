
export const flushArrayToInplaceArray = (fromArray,inPlaceArray) => {
    // in set foreach dont have counter index
    let counter = 0
    fromArray.forEach((x) => {
        inPlaceArray[counter++] =  x
       })
}

export const sumArray = (arr) => arr.length?arr.reduce((a, b) => a + b):0
