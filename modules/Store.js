// eslint-disable-next-line import/prefer-default-export
export class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBooks(title) {
    const booksCollection = Store.getBooks();
    booksCollection.splice(title, 1);
    localStorage.setItem('books', JSON.stringify(booksCollection));
  }
}
