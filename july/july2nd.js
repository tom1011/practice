// Write a function that returns the most frequent character in an array of words.

function mostFrequentChar(arr) {
    arr = arr.join('');
    arr = arr.split('');
    countobj = {};

    for (i = 0 ; i <arr.length ; i ++){
    
    if(countobj[arr[i]]){
        countobj[arr[i]] += 1
    }
    else{
        countobj[arr[i]] = 1
    }
    }
   arr = Object.entries(countobj)

   currentmax = 0
   currentarr = []
   for (i = 0; i<arr.length ; i++){
       if (arr[i][1] > currentmax){
           currentmax = arr[i][1];
           currentarr = [arr[i][0]]
       }
       else if (arr[i][1] === currentmax){
           currentarr.push(arr[i][0])
       }

   }
   return currentarr
}

console.log(mostFrequentChar(["the", "hills", "are", "alive", "with", "the", "sound", "of", "music"]))