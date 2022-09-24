export default class Book {
  constructor(title = 'undefined', author = 'undefined') {
    this._title = title;
    this._author = author;
  }

  displayBooks() {
    let dataStored = [];
    let books = [];
    if (localStorage.getItem('books')) {
      dataStored = localStorage.getItem('books');
      books = JSON.parse(dataStored);

      books.forEach((element, index) => {
        return `
        <tr>
            <td></td>
        </tr>
        `;
      });
    } else {
      // When local storage is empty
    }
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
    console.log(books);
  }

  removeBook() {}
}
