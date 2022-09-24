export default class Book {
  constructor(title = 'undefined', author = 'undefined') {
    this.__title = title;
    this.__author = author;
  }

  addBook() {
    let dataStored = [];
    let books = [];
    if (localStorage.getItem('books')) {
      dataStored = localStorage.getItem('books');
      books = JSON.parse(dataStored);
    }
    books.push(this);
    localStorage.setItem('books', JSON.stringify(books));
  }

  removeBook() {}
}
