// Create a function that takes an array of strings representing times ('hours:minutes:seconds') and returns their sum as an array of integers ([hours, minutes, seconds]).

function timeSum(times) {
    currentsum = [0,0,0]
    temparr = []
    for (i = 0 ; i<times.length ; i++){
        temparr = times[i].split(':')
        currentsum = [Number(currentsum[0]) + Number(temparr[0]), Number(currentsum[1]) + Number(temparr[1]), Number(currentsum[2]) + Number(temparr[2])]
    }
    while (currentsum[2] > 60){
        currentsum = [currentsum[0], Number(currentsum[1]) + 1 , Number(currentsum[2]) - 60];
    }
    while (currentsum[1] > 60) {
        currentsum = [Number(currentsum[0]) + 1, Number(currentsum[1]) -60 , currentsum[2]];
    }
    return currentsum
}

console.log(timeSum(["5:39:42", "10:02:08", "8:26:33"]))