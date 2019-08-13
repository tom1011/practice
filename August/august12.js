// Return the coordinates ([row, col]) of the element that differs from the rest.

function whereIsWaldo(arr) {
    let carone = '';
    let cartwo = '';
    for (i = 0; i < arr.length; i++) {
        // console.log('in first loop logging arr[i]', arr[i])
        for (j = 0; j < arr[i].length-1; j++) {
            carone = arr[i][j]
            cartwo = arr[i][j+1]
            if (carone !== cartwo) {
                if (arr[i][0] === arr[i][j] && arr[i][1] === arr[i][j] || arr[i][1] === arr[i][j] && arr[i][2] === arr[i][j] ){
                    console.log('in if return statment')
                    return [(i+1),(j+2)]
                }
                else {
                    return [(i+1),(j+1)]
            }
        }
    }
}
}

console.log(whereIsWaldo([
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["P", "O", "O", "O"],
    ["O", "O", "O", "O"]
  ]))