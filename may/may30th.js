// Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.


function XO(str) {
    let xcount = 0;
    let ocount = 0;
    for (let i =0; i<str.length; i++){
        if (str[i] == 'x' || str[i] == 'X'){
            xcount += 1
        }
        else if (str[i] == 'o' || str[i] == 'O'){
            ocount += 1
        }
    }
    return (ocount === xcount ? true : false)
}

console.log(XO("zzoo"))