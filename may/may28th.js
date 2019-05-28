//Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.


function testJackpot(result) {
	return (result[0] === result[1] && result[1] === result[2] && result[2] === result[3]) 
}

// console.log(testJackpot(["@", "@", "@", "@"]))

// Create a function that takes a number as its argument and returns an array of all its factors.

function factorize(num) {
    let factorarray = []
    for (let i =1; i<=num; i ++){
        if (num % i == 0){
            factorarray.push(i)
        }
    }
    return factorarray
}

console.log(factorize(17))