// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(num) {
    let total = 0
    for (let i = 1; i<=num; i++){
        total = i + total
    }
    return total
}

// console.log(addUp(5))

// Create a function to convert an array of percentages to their decimal equivalents.

function convertToDecimal(perc) {
    let returnarray = [];
    let res = '';
    for (let i = 0; i<perc.length ; i++){
        res = perc[i].substr(0, (perc[i].length-1));
        res = Number(res) / 100
        returnarray.push(res)
    }
    return returnarray
}

console.log(convertToDecimal(["1%", "20%", "3%"]))