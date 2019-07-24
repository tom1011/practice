// A group of pirates each have a distribution of gold coins, which can be represented as an array:

// [3, 9, 4, 5, 5]
// // Pirate 1 has 3 gold, Pirate 2 has 9 gold, etc.
// The difference between each pirate's share of gold and that of the richest pirate is represented as:

// [6, 0, 5, 4, 4]
// Since 6 = 9 - 3, 0 = 9 - 9, 4 = 9 - 5, etc.
// Pirates have a keen sense of fairness, and a pirate will kill the others if he deems his share to be too little. Each pirate has a unique inequality threshold - the maximum difference he is willing to tolerate before he kills his comrades.

function piratesKilled(gold, tolerance) {
   maxvalue = Math.max(...gold)
   for (i =0; i<gold.length; i++){
       if (maxvalue === gold[i]){
       }
       else {
           if (maxvalue - tolerance[i] > gold[i] ){
               return true
           }
       }
   }
   return false
}



console.log(piratesKilled([3, 5, 8, 3, 4], [10, 4, 2, 5, 1]))