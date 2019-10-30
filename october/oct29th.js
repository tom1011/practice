// I am going back to JS instead of continuing on java becuse
// I am having a job interview for stuff using js and jquery
// this next week will be used for me to get back into codding JS
// by doing problems from Edabit. I am going on vacation next week
// so I plan on doing a big project demestarting things I've learn since Prime


// problem start: 

// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

function changeEnough(arrayChange, number) {
    let totalChangeAmountArray = [(Number(arrayChange[0]) * 25),  (Number(arrayChange[1]) * 10),  (Number(arrayChange[2]) * 5) , (Number(arrayChange[3]) * 1)];
    let totalChangeAmount = 0;
    // this for loops get the total amount of change.
    for (let i =0; i < totalChangeAmountArray.length; i++){
        totalChangeAmount += Number(totalChangeAmountArray[i])
    }
    let currentAmount = Number(number*100);
    if (totalChangeAmount >= currentAmount) {
        if (totalChangeAmountArray[0] > currentAmount){
            currentAmount -= Math.floor(currentAmount / 25) * 25;
        }
        else {
            currentAmount -= (Number(totalChangeAmountArray[0] * 25)) 
        }
        if (totalChangeAmountArray[1] > currentAmount){
            currentAmount -= Math.floor(currentAmount / 10) * 10;
        }
        else {
            currentAmount -= (Number(totalChangeAmountArray[1] * 10)) 
        }
        if (totalChangeAmountArray[2] > currentAmount){
            currentAmount -= Math.floor(currentAmount / 5) * 5;
        }
        else {
            currentAmount -= (Number(totalChangeAmountArray[2] * 5)) 
        }
        if (totalChangeAmountArray[3] > currentAmount){
            currentAmount -= Math.floor(currentAmount / 25) * 1;
        }
        else {
            currentAmount -= (Number(totalChangeAmountArray[3] * 1));
        }
        if (currentAmount === 0){
            return true;
        }

    }

    else{
        return false;
    }
    return false;
    
}

console.log(changeEnough([5, 5, 5, 5], 6.25));