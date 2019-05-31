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

console.log(possiblePalindrome('acabbaa'))