// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
// In order to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

function hackerSpeak(str) {
    str = str.split('a').join('4');
    str = str.split('e').join('3');
    str = str.split('i').join('1');
   str =  str.split('o').join('0');
    str = str.split('s').join('5');
    return str;
}

console.log(hackerSpeak("javascript is cool"))