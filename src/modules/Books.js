export default class Book {
  constructor(title, author) {
    this._title = title;
    this._author = author;
    this.dataStored = [];
    if (localStorage.getItem('books')) {
      dataStored = JSON.parse(localStorage.getItem('books'));
    }
  }

  displayBooks() {
    if (localStorage.getItem('books')) {
      dataStored = localStorage.getItem('books');
      books = JSON.parse(dataStored);
    } else {
      // When local storage is empty
    }
  }

  addBook() {
    this.dataStored.push(this);
    localStorage.setItem('books', JSON.stringify(this.dataStored));
  }

  removeBook() {}
}
