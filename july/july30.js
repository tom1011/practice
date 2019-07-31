// Create a function that takes a number and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function bugger(num) {
	if (num < 10){
        return num
    }
    let newnum = 0
    numstr = num.toString()
    for (i = 1; i<numstr.length ;i = i +1){
        if (i === 1){
        newnum = Number(numstr[0]) * Number(numstr[i]);
        }
        else {
        newnum = newnum * Number(numstr[i]);
        }
    }
   return bugger(newnum)
}

console.log(bugger(999))