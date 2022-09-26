export default class Book {
  constructor(title = 'undefined', author = 'undefined') {
    this.title = title;
    this.author = author;
  }

  static addBook = () => {
    let dataStored = [];
    let books = [];
    if (localStorage.getItem('books')) {
      dataStored = localStorage.getItem('books');
      books = JSON.parse(dataStored);
    }
    books.push(this);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook = () => {}
}
