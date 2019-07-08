// lPaeesh le pemu mnxit ehess rtnisg! Oh, sorry, that was supposed to say: Please help me unmix these strings!

// Somehow my strings have all become mixed up; every pair of characters has been swapped. Help me undo this so I can understand my strings again.

function unmix(str) {

    arry = []
    let substr = ''
	for (let i =0 ; i<str.length; i = i + 2){
        substr = str.substring(i,i+2)
        if (substr[1]){
        substr = substr[1] + substr[0]
        arry.push(substr)
        }
        else if (
            arry.push(substr[0])
        );
        

    }
    return arry.join('')
}

console.log(unmix("2143657"))