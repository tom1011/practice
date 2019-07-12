// Write a function that returns the minimum number of swaps to convert the first binary string into the second.

function minSwaps(s1, s2) {
    counter = 0
    for (i =0; i<s1.length; i++){
        if (s1[i] !== s2[i]){
            counter = counter + 1
        }
    }
    return Math.ceil(counter/2)
}

console.log(minSwaps("10011001", "01100110"))