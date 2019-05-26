// Create a function takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.

// To illustrate:

function indexShuffle(str) {
    let evenstring = '';
    let oddstring = '';
    for (let i = 0; i<str.length; i ++){
        if ( i % 2 == 0 || i === 0){
            evenstring = evenstring + str[i]
        }
        else {
            oddstring = oddstring + str[i]
        }
    }
    return evenstring + oddstring
}

console.log(indexShuffle('abcd'))