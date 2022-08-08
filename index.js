/* eslint-disable max-classes-per-file */
import { Name } from './modules/name.js';
import { Store } from './modules/Store.js';
import { showBook } from './modules/showBook.js';

document.addEventListener('DOMContentLoaded', showBook.displayBooks);

document.querySelector('#input').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#inputTitle').value;
  const author = document.querySelector('#inputAuthor').value;

  const name = new Name(title, author);

  showBook.addBookList(name);

  Store.addBook(name);

  showBook.clearFields();
});
document.querySelector('#list').addEventListener('click', (e) => {
  showBook.removeBooks(e.target);
  Store.removeBooks(
    e.target.parentElement.previousElementSibling.previousElementSibling
      .textContent,
  );
});

const List = document.querySelector('.list1');
const Add = document.querySelector('.add');
const contactForm = document.querySelector('.contact1');
const h2 = document.querySelector('.list1');

Add.addEventListener('click', () => {
  document.querySelector('#list').style.display = 'none';
  document.querySelector('#input1').style.display = 'block';
  document.querySelector('.contact').style.display = 'none';
  document.querySelector('.h2-list').style.display = 'none';
});

contactForm.addEventListener('click', () => {
  document.querySelector('#list').style.display = 'none';
  document.querySelector('#input1').style.display = 'none';
  document.querySelector('.contact').style.display = 'block';
  document.querySelector('.h2-list').style.display = 'none';
});

List.addEventListener('click', () => {
  document.querySelector('#list').style.display = 'block';
  document.querySelector('#input1').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
  document.querySelector('.h2-list').style.display = 'none';
  /* eslint-disable-next-line */
});

h2.addEventListener('click', () => {
  document.querySelector('#list').style.display = 'block';
  document.querySelector('#input1').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
  document.querySelector('.h2-list').style.display = 'block';
  /* eslint-disable-next-line */
});
