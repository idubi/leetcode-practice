//125. Valid Palindrome

var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi, '').toUpperCase();
    let i=0
    let  isEven = s.length%2==0
    let isPal = true
    let halfLength = isEven ? s.length/2 : Math.trunc(s.length/2)

    while( isPal && i<=halfLength){
        if (s[i] != s[s.length-1-i]){
            isPal=false
        }
        i++
    }
    return isPal
};

let s='A man, a plan, a canal: Panama'
console.log({s,isPal:isPalindrome(s)}); 