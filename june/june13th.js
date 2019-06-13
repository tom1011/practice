// did a codding challenge for someone instead of keeping up on daily challanges.

// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 1 penny gives you 6.25 + 2 + .25 + 0 = 8.50.

// 25, 10 , 5 , 1

function changeEnough(change, amountDue) {
    let totalchange = change[0]*.25 + change[1]*.1 + change[2]*.05 + change[3]*.01
    return totalchange >= amountDue
}

// console.log(changeEnough([25, 20, 5, 0], 4.25))

// A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.

function isPandigital(num) {
    let strnum = num.toString()
	for (let i = 0; i <= 9; i++){
        if (!strnum.includes(i.toString())){
            return false
        }
    }
    return true
}

console.log(isPandigital(98140723568910))