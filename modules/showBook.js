/* eslint max-classes-per-file: ["error", 2] */
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

export class showBook {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => showBook.addBookList(book));
  }

  static addBookList(book) {
    const list = document.querySelector('#list');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${book.title} <span> By  </span>  </td>
       <td>${book.author}</td>
       <td><a href="#" class="btn1  delete">Remove</a></td>
       `;
    list.appendChild(row);
  }

  static removeBooks(li) {
    if (li.classList.contains('delete')) {
      li.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#inputTitle').value = '';
    document.querySelector('#inputAuthor').value = '';
  }
}
