// Create a Book constructor that has two properties :

// Title
// Author
// and two methods:

// A getter for title that returns: "Title: " + the instance title.
// A getter for the author that returns: "Author: " + the instance author.
// and instantiate this constructor by creating 3 new books:

// Pride and Prejudice - Jane Austen (PP)
// Hamlet - William Shakespeare (H)
// War and Peace - Leo Tolstoy (WP)
// Name the new object instances PP, H, and WP, respectively.

// For instance, if I instantiated the following book using this Book constructor function:

// Harry Potter - J.K. Rowling (HP)
// I would get the following properties and methods:


// function Book(title, author){
//     this.title = title;
//     this.author = author;
//     this.getTitle = function() {
//         return "Title: " + this.title;
//     }
//     this.getAuthor = function() {
//         return "Author: " + this.author;
//     }
// }

// var PP = new Book("Pride and Prejudice", "Jane Austen");
// var H = new Book("Hamlet", "William Shakespeare");
// var WP = new Book("War and Peace", "Leo Tolstoy");

// console.log(PP.title)
// console.log(PP.author)
// console.log(PP.getAuthor())
// console.log(PP.getTitle())


// Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:

function findBrokenKeys(str1, str2) {
let brokenKeysArray = [];
for (let i =0; i<str1.length; i ++){
    if (str1[i] !== str2[i]){
        brokenKeysArray.push(str1[i])
    }
}
 return [...new Set(brokenKeysArray)]
	
}

// console.log(findBrokenKeys("happy birthday", "hawwy birthday"));

// Odd numbers like to hangout with odd numbers. Even numbers like to hangout with even numbers.

// A spot is an insertion between two numbers in an array. Given an array of n integers in length, there are n-1 spots available.

// After a number is newly inserted into a spot, it's left neighbor is the number directly to the left of it and it's right neighbor is the number directly to the right of it.

// Odd numbers like having the following (left neighbor, right neighbor combinations): (odd, even), (even, odd), (odd, odd) .They dislike having both neighbors being even, or (even, even).

// Similarly, even numbers like the following neighbor combinations: (even, odd), (odd, even), (even, even). They dislike having both neighbors being odd, or (odd, odd).

// Given an array, calculate the number of liked spots.

function availableSpots(arr, num) {

    var arrOddEven = []
    for (let i=0; i<arr.length; i++){
        if (arr[i]%2 === 1){
            arrOddEven.push("odd")
        }
        else {
            arrOddEven.push("even")
        }
    }

    let numberSpots = 0
	if (num %2 === 1) {
        // odd
        for (let i=0; i<arrOddEven.length -1; i++){
            if (arrOddEven[i] === "odd" || arrOddEven[i +1] === "odd"){
                numberSpots += 1
            }
        }

    }
    else {
        for (let i=0 ; i<arrOddEven.length -1; i ++){
            if (arrOddEven[i] !== "odd" || arrOddEven[i +1] !== "odd")
            numberSpots += 1
        }

    }
    return numberSpots
}

console.log(availableSpots([4, 4, 4, 4, 5], 7))