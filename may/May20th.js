// Create a function that determines whether an input value is omnipresent for a given array.

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]] ,3]

function isOmnipresent (arrays, number){
    for (let i =0; i<arrays.length; i++){
		if (arrays[i].includes(number)){
        }
        else {
            return false
        }
	}
	return true;
}

console.log(isOmnipresent([[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]] ,3))