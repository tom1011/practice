// Create a function that validates a password to conform to the following rules:

// Length between 6 and 24 characters.
// At least one uppercase letter (A-Z).
// At least one lowercase letter (a-z).
// At least one digit (0-9).
// Maximum of 2 repeated characters.
// "aa" is OK 👍
// "aaa" is NOT OK 👎

function validatePassword(password) {
	if (password.length < 6 || password.length > 24){
        return false
    }
    if (password.match(/[A-Z]/ && password.match(/[a-z]/) && password.match(/[0-9]/))){
        for (i =0; i<password.length-2; i++){
            if (password[i] === password[i+1] && password[i] === password[i+2] ){
                return false
            }
        }
        return true
    }
    return false
}

console.log(validatePassword('edislekd4'))