
// 392. Is Subsequence

//regular expresion solution 

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const generateRegexForSubStr = (subStr) => {
    let regex =  `${subStr.split('').map((ch) => `.*${ch}` ).join('')}`
    return regex
}
// }
var isSubsequence = function(s, t) {
  if (s.length==0) { 
      return true
  }
     let rgx = generateRegexForSubStr(s)
     let newString = t.replace( new RegExp( rgx  ,'g'),'xxx')
     return  newString !==t

};
