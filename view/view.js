export default class View {
  _data;
  _cleanAndAdd(markup) {
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterend", markup);
  }
  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._cleanAndAdd(markup);
  }
}
