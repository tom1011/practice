// Create a function that takes a string (IPv4 address in standard dot-decimal format) and returns true if the IP is valid or false if it's not. For information on IPv4 formatting, please refer to the resources in the Resources tab.

function isValidIP(str) {
    let splitstr = str.split('.')
    let splitnum = 0
	if (splitstr.length != 4){
        return false
    }
    
    for (i = 0; i<splitstr.length; i ++){
        splitnum = Number(splitstr[i]) 
        // see if is whole number between 0-255
        if (splitnum > 255){
            return false
        }
        else if(splitnum < 0){
            return false
        }
        else if (splitnum % 1 != 0){
            return false
        }
        // end number val
        if (splitstr[i].includes(' ')){
            return false
        }
    }
    return true
}

//254
console.log(isValidIP("255.45.2.89"))