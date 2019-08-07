// Given a number, n, return a function which adds n to the number passed to it.


// function add(n) {
// 	return function (y){
//         return n + y
//     }
// }

// console.log(add(10)(20))




// Create a function that takes an array. This array can have all kinds of items, even other arrays. The function should return a single, flat, one-dimensional, array with all elements. Here are the conditions:

// If the item is an Array, include each item in it and the following still apply:
// If the item is a Function, include the function's output, not the function itself.
// If the item is a plain Object or a Primitive, include it as is.


function flattenArray(array) {
    let returnarray = []
    let temparray = []
    returnarray = array.flat(array.length)
    for (i=0;i<returnarray.length;i++){
        if (typeof returnarray[i]=== "function" ){
            temparray.push(returnarray[i]())
        }
        else {
        temparray.push(returnarray[i])
        }
    }
    return temparray
}


console.log(flattenArray([1, "2", [3, function () { return 4; }, [ "five" ], "six", true, { prop: "val" }]]))