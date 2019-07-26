// Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.



function getMiddle(str) {
    if (str.length % 2 === 0) {
        return str.substring(str.length/2-.5, str.length/2+1.5)
    }
    else {
        return str.substring(str.length/2,str.length/2 +1)
    }
}

console.log(getMiddle("testing"))