

var library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    }
];

// Write a JavaScript function that receives the following library object as an
// input and displays the books that can be read (the reading status is true).
// Log the book name, author name and reading status .

const getReadableBooks = arr => arr.filter(bookObj => bookObj.readingStatus)

const booksYouCanRead = getReadableBooks(library) 
console.log('Books you can read: ')
booksYouCanRead.forEach(book => {
    console.log(' book name: ', book.title)
    console.log(' book author: ', book.author)
    console.log(' book reading status: ', book.readingStatus)
})