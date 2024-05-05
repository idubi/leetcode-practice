
// 392. Is Subsequence

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


var isSubsequence = function(s, t) {
        if (s.length==0   )
          return true

        let fisrtId = t.indexOf(s[0])
        let lastId = t.length-1-t.split('').reverse().indexOf(s[s.length-1])
        if ( lastId<s.length-1 || lastId < fisrtId || lastId===-1 || fisrtId===-1)  
          return false

        let isNextFound = true
        let nextId=fisrtId+1
        let i=1
        while (i<s.length && isNextFound && i<=lastId)
        {
         
           let currentPosition  = t.indexOf(s[i],nextId)
           if (currentPosition>=nextId ){
              nextId=currentPosition+1
              i=i+1
           } else {
             isNextFound = false
           }
        }

        return isNextFound
   }


let s='acb'
let t="ahbgdc"
console.log({s,t,is_substring:isSubsequence(s,t)})

   
