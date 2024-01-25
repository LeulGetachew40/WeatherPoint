import View from "./view.js";
class ResultsView extends View {
  _parentElement = document.querySelector(".column--1");
  _generateMarkup() {
    console.log(this._data);
    return `<img src = "https://openweathermap.org/img/wn/${
      this._data.weather[0].icon
    }@2x.png"> <p>${this._data.main.temp.toFixed(1)}°C</p>`;
  }
}

export default new ResultsView();
