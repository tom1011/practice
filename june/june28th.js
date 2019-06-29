// Create a function that takes an array of names and returns an array with the first letter capitalized.

function capMe(arr) {
    console.log('in cap me')
    let tempword = "";
    let returnarr = [];
	for (i = 0; i < arr.length; i++){
        tempword = arr[i].toLowerCase();
        tempword = tempword.charAt(0).toUpperCase() + tempword.slice(1);
        returnarr.push(tempword);
    }
    return returnarr
}

console.log(capMe(["mavis", "senaida", "letty"]));