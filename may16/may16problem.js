// Write a function that can determine whether a string is a palindrome (reads same backwards and forwards)

let testPalidrome = 'loopl'

function isPalindrom(string) {
    counter = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[string.length - i -1]) {
        }
        else {
            return false
        }

    }
    return true
}

// console.log(isPalindrom(testPalidrome))