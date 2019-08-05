// I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].


function flatten(arr) {
    arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j=0;j<arr[i].length; j ++){
            arr2.push(arr[i][j]);
        }
    }
    return arr2;
  }

console.log(flatten([[1, 2], [3, 4]]))