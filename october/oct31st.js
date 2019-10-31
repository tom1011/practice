// Create a Book constructor that has two properties :

// Title
// Author
// and two methods:

// A getter for title that returns: "Title: " + the instance title.
// A getter for the author that returns: "Author: " + the instance author.
// and instantiate this constructor by creating 3 new books:

// Pride and Prejudice - Jane Austen (PP)
// Hamlet - William Shakespeare (H)
// War and Peace - Leo Tolstoy (WP)
// Name the new object instances PP, H, and WP, respectively.

// For instance, if I instantiated the following book using this Book constructor function:

// Harry Potter - J.K. Rowling (HP)
// I would get the following properties and methods:


function Book(title, author){
    this.title = title;
    this.author = author;
    this.getTitle = function() {
        return "Title: " + this.title;
    }
    this.getAuthor = function() {
        return "Author: " + this.author;
    }
}

var PP = new Book("Pride and Prejudice", "Jane Austen");
var H = new Book("Hamlet", "William Shakespeare");
var WP = new Book("War and Peace", "Leo Tolstoy");

console.log(PP.title)
console.log(PP.author)
console.log(PP.getAuthor())
console.log(PP.getTitle())

