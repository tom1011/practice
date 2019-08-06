// Given an array of numbers, write a function that returns an array that...

// Has all duplicate elements removed.
// Is sorted from least to greatest value.

function uniqueSort(arr){
    return Array.from(new Set(arr.sort(function(a, b) {return a - b;})))


}


console.log(uniqueSort([1, 100, 4, 5, 6, 27, 3]))