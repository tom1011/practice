// Return the smallest number of steps it takes to convert a string entirely into uppercase or entirely into lower case, whichever takes the fewest number of steps. A step consists of changing one character from lower to upper case, or vice versa.

function stepsToConvert(str) {
    counterbig =0;
    countersmall =0;
    for (i=0;i<str.length;i++){
        if (str[i].match(/^[a-z]+$/)){
            counterbig += 1
        }
        else {
            countersmall += 1
        }

    }
    return (counterbig < countersmall ? counterbig : countersmall)
}

console.log(stepsToConvert("abC"))