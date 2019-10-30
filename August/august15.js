// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

function numInStr(arr) {
    returnarr = []
    for (i =0;i<arr.length;i++){
        if (arr[i].match(/[0-9]/g)){
            returnarr.push(arr[i])
        }
    }
    return returnarr
}

console.log(numInStr(["1a", "a", "2b", "b"]));


// Create a function that takes two dates and returns the number of days between the first and second date.

function getDays(date1, date2) {
    console.log(date1)
	return date1 - date2
}

console.log(getDays(new Date("June 14, 2019"),
new Date("June 20, 2019")))