

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

