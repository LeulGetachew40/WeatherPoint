import View from "./view.js";
class SearchView extends View {
  _parentElement = document.querySelector(".search");

  getSearchItem() {
    console.log(this._parentElement.querySelector("#locationInput").value);
    return this._parentElement.querySelector("#locationInput").value;
  }

  subscribeEvents(handler) {
    this._parentElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
