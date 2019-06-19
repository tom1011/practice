

// Create a function that returns true if two arrays contain identical values, and false otherwise.

function checkEquals(arr1, arr2) {
    for (i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
        } else {
            return false
        }
    }
    return true
}

// console.log(checkEquals([1, 2], [1, 3]))

// To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.

function progressDays(runs) {
    let progressDays = 0;
    for (i = 0; i < runs.length - 1; i++) {
        if (runs[i] < runs[i + 1]) {
            progressDays += 1
        }
    }
    return progressDays
}

// console.log(progressDays([10, 11, 12, 9, 10]));

// In the world of birding there are four-letter codes for the common names of birds. These codes are created by some simple rules:

// If the bird's name has only one word, the code takes the first four letters of that word.
// If the name is made up of two words, the code takes the first two letters of each word.
// If the name is made up of three words, the code is created by taking the first letter from the first two words and the first two letters from the third word.
// If the name is four words long, the code uses the first letter from all the words.
// There are other ways codes are created, but this challenge will only use the four rules listed above.

// In this challenge you will write a function that takes an array of strings of common bird names and create the codes for those names based on the rules above. The function will return an array of codes in the same order in which the input names were presented.


// function birdCode(arr) {
//     var returnArray = []
//     for (i = 0; i < arr.length; i++) {
//         let wordcount = arr[i].split(" ").length - 1 + arr[i].split('-').length - 1
//         switch (wordcount) {
//             case 4:
//                 returnArray.push()
//             case 3:
//                 returnArray.push()
//             case 2:
//                 returnArray.push()
//             case 1:
//                 returnArray.push(arr[i].indexOf(0, 3))
//         }

//     }
//     return returnArray
// }

// console.log(birdCode(["Black-Capped Chickadee", "Common Tern"]))