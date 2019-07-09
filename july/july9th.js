function towerHanoi(discs) {
	return (Math.pow(2, discs)) - 1
}

console.log(towerHanoi(3))

// Given three numbers, x, y and z, determine whether they are the edges of a right angled triangle.

function rightTriangle(x, y, z) {

    largest = Math.max(x, y, z)
    smallest = Math.min(x, y, z)
    if (smallest <= 0){
        return false
    }
    boolean = false
    switch(largest) {
        case x: 
            if (Math.pow(y,2) + Math.pow(z,2) === Math.pow(x,2) ){
                return true
            }
            return false
        case y:
        if (Math.pow(x,2) + Math.pow(z,2) === Math.pow(y,2) ){
            return true
        }
        return false
        case z:
        if (Math.pow(y,2) + Math.pow(x,2) === Math.pow(z,2) ){
            return true
        }
        return false
    }
}

console.log(rightTriangle(0, 0, 0))