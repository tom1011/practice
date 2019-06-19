// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.

function missingNum(arr) {
        for (i = 1; i <11 ; i++){
            if (!arr.includes(i)){
                return i
            }
        }
}

console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]))