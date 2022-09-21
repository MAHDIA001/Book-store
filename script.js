const form = document.querySelector('.form');
const storedBooks = JSON.parse(localStorage.getItem('books'));
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const library = document.querySelector('.library');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td> by ${book.author}</td> 
  
    <td><button class='remove'>
    remove
    </button></td>
   `;
    library.appendChild(row);
  }
  static deleteBooks(el) {
    if (el.classList.contains('remove')) {
      el.parentElement.parentElement.remove();
    }
  }
  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.books');
    container.appendChild(div);
    // setTimeout(() =>document.querySelector('.alert').remove(),3000)
  }

  static clearFields() {
    document.querySelector('.input-author').value = '';
    document.querySelector('.input-book').value = '';
  }
}

class Store {
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

  static removeBook(book) {
    const books = Store.getBooks();
    book.forEach((elem, index) => {
      elem.parentElement.remove();
      books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(books));
    });
  }
}
document.addEventListener('DOMContentLoaded', UI.displayBooks);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const author = document.querySelector('.input-author').value;
  const title = document.querySelector('.input-book').value;
  if (title === '' || author === '') {
    UI.showAlert('Please fill all fields', 'alert');
  } else {
    const book = new Book(title, author);
    UI.addBookToList(book);
    Store.addBook(book);
    UI.clearFields();
    UI.showAlert('book added successfully!', 'success');
  }
  document.querySelector('.library').addEventListener('click', (e) => {
    UI.deleteBooks(e.target);
    Store.removeBook();
    UI.showAlert('book has been removed!', 'success');
  });
});
