// Create a function that takes an integer and returns an array from 1 to the given number, where:

// If the number can be divided evenly by 4, amplify it by 10 (i.e. return 10 times the number).
// If the number cannot be divided evenly by 4, simply return the number.

function amplify(num) {
    let returnarray = []
    for (let i = 1; i<=num; i++){
        if ( i % 4 === 0){
            returnarray.push(i*10)
        }
        else {
            returnarray.push(i)
        }
    }
    return returnarray
}

// console.log(amplify(12))

// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

// To illustrate:

// largestSwap(27) ➞ false

// largestSwap(43) ➞ true
// If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

function largestSwap(num) {
   num = num.toString()
    if (num[0] > num[1]) {
       return true
    }
    else if (num[1] > num[0]) {
        return false
    }
    else {
        return true
    }
}

console.log(largestSwap(27))