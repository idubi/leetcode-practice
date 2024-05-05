function countSteps(steps, distance)  {
    // Create an array to store the number of possibilities for each distance
    const possibilities = new Array(distance + 1).fill(0);
  
    // There is 1 possibility to cover 0 distance (doing nothing)
    possibilities[0] = 1;
  
    // Loop through each distance from 1 to the desired distance
    for (let i = 1; i <= distance; i++) {
      // Loop through each available step
      for (const step of steps) {
        // If the step can be taken without going over the current distance
        if (i - step >= 0) {
          // Add the number of possibilities for the remaining distance
          possibilities[i] += possibilities[i - step];
        }
      }
    }
  
    // The final element of the possibilities array will have the total possibilities
    return possibilities[distance]  // Corrected line
  }
      
  let steps= [1,2] 
  let distance = 3 
  console.log({distance , steps,HarryToHorcrux :countSteps(steps,distance)})
  