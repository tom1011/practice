// Create a function that returns the number of hashes and pluses in a string.

// hashPlusCount("###+") ➞ [3, 1]

function hashPlusCount(str) {
    let hasCount = 0;
    let plusCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '#') {
            hasCount = hasCount + 1
        }
        else if (str[i] === '+') {
            plusCount += 1
        }
    }
    return [hasCount, plusCount]
}

console.log(hashPlusCount("###+"))