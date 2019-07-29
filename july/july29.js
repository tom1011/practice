// Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.


function insertWhitespace(s) {
    strsplit = s.match(/[A-Z][a-z]+/g)
    return strsplit.join(' ')
}







console.log(insertWhitespace("SheWalksToTheBeach"))