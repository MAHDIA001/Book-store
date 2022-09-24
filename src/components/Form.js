export default class Form {
  constructor() {
    this._content = `
        <section>
            <form class = "form">
            <input class="input-author" type="text" placeholder="Author">
            <input class="input-book" type="text" placeholder="book">
            <button type="submit" class="add"> Add </button>
            </form>
        </section>
        `;
  }

  get content() {
    return this._content;
  }
}
