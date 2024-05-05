// 135. Candy


var candy = function(ratings) {
       const candies = ratings.map((x) => 1)

       ratings.forEach((rating,idx) => {
            if (rating > ratings[idx-1]){
                candies[idx]=candies[idx-1]+1
            }
        })
        
        const n = ratings.length - 1
        ratings.forEach((rating,idx) => {
            if (ratings[n-idx] > ratings[n-idx+1]){
                candies[n-idx]= Math.max(candies[n-idx],candies[n-idx+1] +1 )
            }
        })

        

        const sum = candies.reduce((a, b) => a + b);
        
        return sum
    };



     let  ratings = [1,0,2]
     let totalCandies = candy(ratings)

     console.log({ratings,totalCandies}) //==> 5
     
     ratings = [1,2,2]
     totalCandies = candy(ratings)
     console.log({ratings,totalCandies}) //==> 4
     
     ratings = [ 1, 2,87,87,87, 2, 1]
     totalCandies = candy(ratings)
     console.log({ratings,totalCandies}) //==> 13

/**
 *     [ 1, 2,87,87,87, 2, 1]
 *       1, 1, 1, 1, 1, 1, 1
 * ==>   0, 1, 2, 0, 0, 0, 0
 * <==   0, 0, 0, 0, 2, 1, 0
 *       1, 2, 3, 1, 3, 2, 1 ==>  (sum) ==> 13 
 *  */                        

    
    


