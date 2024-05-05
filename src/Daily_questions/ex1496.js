// 1496. Path Crossing

/**
 * @param {string} path
 * @return {boolean}
 */
const DIRECTIONS = {
    'N' : {x:1,y:0},
    'S' : {x:-1,y:0},
    'E' : {x:0,y:1},
    'W' : {x:0,y:-1}
    }
const move = (direction,fromPoint ) => {
    let x = fromPoint.x+DIRECTIONS[direction].x
    let y = fromPoint.y+DIRECTIONS[direction].y
    return {x,y}
}



var isPathCrossing = function(path) {
    let steps = [{x:0,y:0}]
    for(let i=0;i<path.length;i++){
        let newPoint =  (move(path[i] , steps[i]))
        if (steps.find((point)=> point.x === newPoint.x && point.y=== newPoint.y  )) {
            return true
        }
        steps.push(newPoint)
    }
    // didnt return true
    return false

    
};

let path = 'NES'
// let path = 'NESWW'
// let path = 'SN'
let pathCross = isPathCrossing(path)
console.log({path,pathCross})

