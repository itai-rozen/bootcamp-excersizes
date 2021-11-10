// 1. create 2 book objects with properties: name, author, year.
const book1 = {
    name: 'book #1',
    author: 'author #1',
    year: 1992
}
const book2 = {
    name: 'book #1',
    author: 'author #2',
    year: 1993
}
// 2. create an empty object bookUtils (utils = short for utilities).
const bookUtils = {}
// 3. add to to the bookUtils object a function getFirstPublished, that recieves 2
// books and returns the book with the smaller year.
bookUtils['getFirstPublished'] = function(obj1,obj2){
    return (obj1.year < obj2.year) ? obj1 : obj2
}

let smallestYearBookObj = bookUtils.getFirstPublished(book1,book2)
console.log('smaller year book: ',smallestYearBookObj)
// 4. add to to the bookUtils object a function setNewEdition, that recieves a
// book and an edition year and sets a new property latestEdition with the
// edition year, or updates an existing one.
bookUtils['setNewEdition'] = function(bookObj,editYear){
        bookObj['latestEdition'] = editYear
}

bookUtils.setNewEdition(book1, 2000)
console.log('book1 with new latest edition property: ',book1)
// 5. add to to the bookUtils object a setLanguage function, that recieves a book
// and a language and sets a new property language with the languahe, or
// updates an existing one.
bookUtils['setLanguage'] = function(bookObj,language){
    bookObj['language'] = language
}

bookUtils.setLanguage(book2, 'Gibberish')
console.log('book2 with new language prop: ',book2)
// 6. add to to the bookUtils object a setTranslation function, that recieves a
// book a language and a translator, and sets a new property of translation,
// which is an object that contains the translator and the language.
bookUtils['setTranslation'] = function(bookObj,language, translator){
    bookObj['translation'] = `${translator} : ${language}`
}

bookUtils.setTranslation(book1, 'Dothraki', 'K. Targerian')
console.log('book1 with nw translation property: ',book1)
// 7. add to to the bookUtils object a setPublisher function, that recieves a book
// a name and a location, and sets a new property named publisher, which is an
// object that contains the name and location.
bookUtils['setPublisher'] = function(bookObj,publisherName, publisherLocation){
    bookObj['publisher'] = {
        name: publisherName,
        location: publisherLocation
    }
}
bookUtils.setPublisher(book2, 'Donald trump', 'Washington')
console.log('book2 with new publisher prop obkect: ',book2)
// 8. add to to the bookUtils object a function isSamePublisher, that recieves 2
// books and checks if the publisher name and location are identical in the 2
// books.
bookUtils['isSamePublisher'] = function(obj1,obj2){
    return (obj1.publisher.name === obj2.publisher.name &&
            obj1.publisher.location === obj2.publisher.location)
}
bookUtils.setPublisher(book1,'Donald trump', 'Washington')
console.log('both books have same publisjer? ', bookUtils.isSamePublisher(book1,book2))
console.log('book 1 publisher: ',book1.publisher)
console.log('book 2 publisher: ',book2.publisher)
bookUtils.setPublisher(book1,'Joe Biden', 'Washington')
console.log('both books have Still same publisjer? ', bookUtils.isSamePublisher(book1,book2))
console.log('book 1 publisher: ',book1.publisher)
console.log('book 2 publisher: ',book2.publisher)