// calculate the cumber of possible 

/**
 *  |[1,2],3| ==> 3
 *  |[1,2],4| ==> 5
 *    0: 1        |                       | 1
 *    1: 1        |                       | 1
 *    2: 1-1     ,| 2                     | 2
 *    3: 1-1-1   ,| 1-2, 2-1              | 3 
 *    4: 1-1-1-1 ,| 1-2-1,1-1-2,2-1-1,2-2 | 5  ==>  if we can use another number , then we add it , and all other possibilities 
 *                                                [all of the prev possibilities] + new_number , 1 + [all prev prossibilities] - for each possibility
 *                                                      --> since the items that are assembling
 *                                                          this number are expressed by this number
 */  
 
/**
 *  |[3,4],5| ==> : 0      
 *    0: 1      |                                  |1 
 *    1:        |                                  |0 
 *    2:        |                                  |0
 *    3: 3      |                                  |1
 *    4: 4      |                                  |1
 *    5:        |  p[5] = p[5]+p[5-4]+p[7-3] = 0   |0
 *    6:        |  p[6] = p[6]+p[6-4]+p[6-3] = 1   |1
 */
 


/**
 *  |[3,4],7| ==> 
 *    0:         |                              |1 
 *    1:         |                              |0 
 *    2:         |                              |0
 *    3: 3       |   p[3] = p[3]+p[0]           |1
 *    4: 4       |   p[4] = p[4]+p[0]           |1
 *    5:         |                              |0
 *    6: 3-3     |                              |1
 *    7: 3-4,4-3 |  p[7] = p[7]+p[7-4]+p[7-3]   |2
 *      */ 


function HarryToHorcrux(distance, possibleSteps) {
    // Write your code here.
    possibleSteps.sort()
    
    let possibilities = new Array(distance+1).fill(0)
    possibilities[0] = 1
    for (let i=1; i<= distance ;i++){
        possibleSteps.forEach((step)=> {
            let priorStep = possibilities[i-step]||0
            if (i - step >=0 ){
                possibilities[i]=possibilities[i]+priorStep
            }
        })
    }
    

    return possibilities[distance]
}

let steps= [3,4]
let distance = 6 
console.log({distance,steps,HarryToHorcrux :HarryToHorcrux(distance,steps)})
