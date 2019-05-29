// Create a function that returns true if an asterisk * is inside a box.

// inBox([
//   "###",
//   "#*#",
//   "###"
// ]) ➞ true

// inBox([
//   "####",
//   "#* #",
//   "#  #",
//   "####"
// ]) ➞ true

// inBox([
//   "####",
//   "#  #",
//   "#  #",
//   "####"
// ]) ➞ false

// inBox([
//   "#####",
//   "#   #",
//   "#   #",
//   "#   #",
//   "#####"
// ]) ➞ false

function inBox(arr) {
   for (let i = 0; i<arr.length; i++){
       if (arr[i].includes('*')){
           return true
       }
   }
   return false
}

console.log(inBox(["####",
"#* #",
"#  #",
"####"
]))