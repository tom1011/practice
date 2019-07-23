// An array is positive dominant if it contains strictly more unique positive values than unique negative values.

// Write a function that returns true if an array is *positive dominant.

function isPositiveDominant(a) {
    possitivearry = [];
    negativearry = [];

	for (i=0;i<a.length;i++){
        if (a[i] > 0){
            if (!possitivearry.find(element => element === a[i])){
                possitivearry.push(a[i])
            }
        }
        else if (a[i] < 0){
            if (!negativearry.find(element => element === a[i])){
                negativearry.push(a[i])
            }
        }
    }
    return possitivearry.length > negativearry.length
}

console.log(isPositiveDominant([5, 99, 832, -3, -4])) // this is true