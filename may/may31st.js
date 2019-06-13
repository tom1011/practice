// Create a function that returns the frequency distribution of an array. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.

function getFrequencies(arr) {
    const returnobject =  arr.reduce(function (objectcur, arr){ 
        if ( arr in objectcur ) {
            objectcur[arr]++;
        }
         else {
            objectcur[arr] = 1;
        }
        return objectcur
    }, {} );
    return returnobject
}

// console.log(getFrequencies(["A", "B", "A", "A", "A"]))

// Create a function that determines whether it is possible to build a palindrome from the characters in a string.

function possiblePalindrome(str) {
    let countarry = {}
    let oddcount = 0
    for (let i = 0; i<str.length; i++){
        if (str[i] in countarry){
            countarry[str[i]]++;
        }
        else {
            countarry[str[i]] = 1;
        }
    }
    for (var key in countarry){
        if (countarry[key] % 2 === 0){

        }
        else {
            oddcount ++
        }
    }
    if (oddcount > 1){
        return false
    }
    else {
        return true
    }
}

// console.log(possiblePalindrome('acabbaa'))

// Suppose a swimming pool blueprint can be represented as a 2D array, where 1s represent the pool and 0s represent the rest of the backyard.

function isLegitimate(arr) {
    if (arr[0].includes(1) || arr[arr.length-1].includes(1))
    {
        return false
    }
    else {
        for (let i = 1; i<arr.length-2; i++ ){
           if ( arr[i][0] === 1 || arr[i][arr[i].length-1] === 1) {
               return false
           }
        }
        return true
    }
}

// console.log(isLegitimate(
//     [[0, 0, 0, 0, 0, 0, 0, 0],
// [0, 1, 1, 1, 1, 1, 0, 0],
// [0, 1, 1, 1, 1, 1, 0, 0],
// [0, 1, 1, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 0]]
// ))

// Create a function that converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

function toCamelCase(str) {
    arr = []
    if (str.includes('-')) {
        arr = str.split('-')
    }
    else if (str.includes('_')){
        arr = str.split('_')
    }
    else {
        return ''
    }
    let noncatarr = []
    noncatarr = (arr[0])
    for (let i = 1; i<arr.length; i++){
        noncatarr = noncatarr + (arr[i].charAt(0).toUpperCase() + arr[i].slice(1, str.length))
    }
    return noncatarr
}

console.log(toCamelCase("The_Stealth_Warrior"))