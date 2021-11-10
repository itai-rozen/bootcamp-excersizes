// 1. Create an object that represents a book. It should have
// 4-5 properties that make sense for a book to have.
// 2. Then write a function that has one argument, a book,
// that will return the following description from your book
// object:
// `The book <book name> was written by <author name> in
// the year <publishing year>

const book = {
    name: 'Harry potter and the poisoned banana',
    author: 'J.K trolling',
    yearPublished: 1999,
    genre: 'Horror',
    description: 'psychadelic journey of a boy and a banana.' 
}

const getBookDetails = bookObj => 
`The book '${bookObj.name}' was written by ${bookObj.author} in the year ${bookObj.yearPublished}`

console.log(getBookDetails(book))