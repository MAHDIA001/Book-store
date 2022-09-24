export default class List {
  constructor() {
    this._content = `
    <section>
        <h1 class="h1 invisible">Awesome Books</h1>
        <div class="books"></div>
        <table>
            <th>Book</th>
            <th>Author</th>
            <th>remove</th>
            <tbody class="library invisible">
            </tbody>
        </table>
    </section>
    `;
  }

  get content() {
    return this._content;
  }
}
