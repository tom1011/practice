

// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:


function getTotalPrice(groceries) {
    let totalprice = 0
    for (let i = 0; i < groceries.length; i++) {
        totalprice += (Number(groceries[i].price) * Number(groceries[i].quantity)) * 100
    }
    return totalprice / 100

}



// console.log(getTotalPrice([
//     { product: "Chocolate", quantity: 1, price: 0.10 },
//     { product: "Lollipop", quantity: 1, price: 0.20 }
//   ]))



// Given a string, reverse all the words which have odd length. The even length words are not changed

function reverseOdd(str) {

    let strArray = str.split(" ")
    
    let reversedArray = "";
    for (let j = 0; j < strArray.length; j++) {
        if (strArray[j].length % 2 !== 1) {
            reversedArray = reversedArray + " " + strArray[j]
        }
        else {
            let reverseWord = "";
            for (let i = 0; i < strArray[j].length; i++) {
                reverseWord = reverseWord + (strArray[j][strArray[j].length - i - 1])
            }
            reversedArray = reversedArray + " " + reverseWord
        }
    }

    return reversedArray.slice(1,reversedArray.length)
}

console.log(reverseOdd("One two three four"))