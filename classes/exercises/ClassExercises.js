// Define your Book class here:
class book {
    constructor(title, author, copyrightDate, isbn, numberOfPages, timesCheckedOut, isDiscarded){
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.numberOfPages = numberOfPages;
        this.timesCheckedOut = timesCheckedOut;
        this.isDiscarded = isDiscarded;
        }
        checkout(uses=1) {
            this.timesCheckedOut += uses;
        }
    }

// Define your Manual and Novel classes here:
class Manual extends book {
    constructor (title, author, copyrightDate, isbn, numberOfPages, timesCheckedOut, isDiscarded) {
        super(title, author, copyrightDate, isbn, numberOfPages, timesCheckedOut, isDiscarded);
         //properties
    }
    dispose(currentYear) {
        if (currentYear+this.copyrightDate > 5) {
            this.isDiscarded = 'Yes';
        }
    }
}

class Novel extends book {
    constructor (title, author, copyrightDate, isbn, numberOfPages, timesCheckedOut, isDiscarded) {
        super(title, author, copyrightDate, isbn, numberOfPages, timesCheckedOut, isDiscarded);
        //properties
    }
    dispose(){
        if (this.timesCheckedOut > 100) {
            this.isDiscarded = 'Yes';
        }
    }
}

// Declare the objects for exercises 2 and 3 here:

let book1 = new Novel("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32, "No");
let book2 = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, "No");


// Code exercises 4 & 5 here:
let currentYear = 2024;
//book2.dispose()
book1.checkout(5)
book2.dispose(currentYear);

console.log(book2);

//let timesCheckedOut = book1.timesCheckedOut
//book1.timesCheckedOut(timesCheckedOut += 5);

console.log(book1);

//function discardBook() {
//    let discardBook = novel.dispose();
//}

