const book1 = {
    name: `Dune`,
    author: `Franc Herber`,
    year: 1965
  }
  
  const book2 = {
    name: `The Hobbit`,
    author: `Tolkien`,
    year: 1939
  }
  
  const bookUtils = {
    getFirstPublished(book1, book2) {
      return book1.year < book2.year ?
      `${book1.name} was published before ${book2.name}`
      : `${book2.name} was published before ${book1.name}`
    },
  
    setNewEdition(book, editionYear) {
      if (book.year < editionYear) {
        book.latestEdition = editionYear;
      }
    },
  
    setLanguage(book, lang) {
      book.language = lang;
    },
  
    setTranslation(book, trans, lang) {
      const newBook = {translator: trans, language: lang};
      book.translation = newBook;
    },
  
    setPublisher(book, name, location) {
      const pub = {name: name, location: location}
      book.publisher = pub;
    },
  
    isSamePublisher(book1, book2) {
    return book1.publisher.name === book2.publisher.name ? true : false
    }
  }
  
  console.log(bookUtils.getFirstPublished(book1, book2));
  bookUtils.setNewEdition(book1, 1984);
  bookUtils.setNewEdition(book1, 1985);
  console.log(book1);
  bookUtils.setLanguage(book2, `English`)
  console.log(book2);
  bookUtils.setTranslation(book2, `Idan`, `Hebrew`);
  console.log(book2);
  bookUtils.setPublisher(book1, `Dave`, `Washington`);
  console.log(book1);
  bookUtils.setPublisher(book2, `Dave`, `Seatle`);
  console.log(book2);
  console.log('is it the same publisher? ',bookUtils.isSamePublisher(book1, book2))