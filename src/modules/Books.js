export default class Book {
  constructor(title, author) {
    this._title = title;
    this._author = author;
  }

  addBook() {
    let storedData = localStorage.getItem('books');
    let objectData = [];
    
  }
}
