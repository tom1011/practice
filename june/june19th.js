// In the world of birding there are four-letter codes for the common names of birds. These codes are created by some simple rules:

// If the bird's name has only one word, the code takes the first four letters of that word.
// If the name is made up of two words, the code takes the first two letters of each word.
// If the name is made up of three words, the code is created by taking the first letter from the first two words and the first two letters from the third word.
// If the name is four words long, the code uses the first letter from all the words.
// There are other ways codes are created, but this challenge will only use the four rules listed above.

// In this challenge you will write a function that takes an array of strings of common bird names and create the codes for those names based on the rules above. The function will return an array of codes in the same order in which the input names were presented.


function birdCode(arr) {
    var returnArray = []
    for (i = 0; i < arr.length; i++) {
        let temparr = []
        let wordcount = arr[i].split(/ |-/).length - 1
        switch (wordcount) {
            case 3:
            temparr = arr[i].split(/ |-/)
            returnArray.push(temparr[0].substring(0,1).toUpperCase() + temparr[1].substring(0,1).toUpperCase() + temparr[2].substring(0,1).toUpperCase() + temparr[3].substring(0,1).toUpperCase())
            break
            case 2:
            temparr = arr[i].split(/ |-/)
            returnArray.push(temparr[0].substring(0,1).toUpperCase() + temparr[1].substring(0,1).toUpperCase() + temparr[2].substring(0,2).toUpperCase())
            break
            case 1:
            temparr = arr[i].split(/ |-/)
            returnArray.push(temparr[0].substring(0,2).toUpperCase() + temparr[1].substring(0,2).toUpperCase())
            break
            case 0:
            returnArray.push(arr[i].substring(0, 4).toUpperCase())
            break
        }

    }
    return returnArray
}

console.log(birdCode(["Black-Capped Chickadee Dack", "Common Tern"]))