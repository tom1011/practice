// Write a function that splits a string into substrings of size n, adding a specified delimiter between each of the pieces.

function splitAndDelimit(str, num, del) {
    let temparr = [];
    for (i = 0; i< (str.length/num) ; i ++){
        temparr.push(str.slice(i*num , i*num + num))
    }
   return temparr.join(del)
}

console.log(splitAndDelimit("bellow", 2, "&"))// "be&ll&ow"