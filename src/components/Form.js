import Book from '../modules/Books.js';
export default class Form {
  constructor() {
    this._content = `
        <section>
            <form class = "form">
            <input class="title" type="text" placeholder="book Title">
            <input class="author" type="text" placeholder="Book Author">
            <button type="submit" class="add"> Add </button>
            </form>
        </section>
        `;
  }

  get content() {
    return this._content;
  }

  activeFormSubmit() {
    const form = document.querySelector('.form');
    const author = document.querySelector('.author');
    const title = document.querySelector('.title');
    form.addEventListener('submit', () => {
      const data = new Book(title, author);
      data.addBook();
    });
  }
}
