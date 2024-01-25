class searchView {
  _parentElement = document.querySelector(".search");

  getSearchItem() {
    return this._parentElement.value;
  }

  subscribeEvents(handler) {
    this._parentElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
      handler();
    });
  }
}

export default new searchView();
