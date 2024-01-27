import View from "./view.js";
import { WEATHER_ICONS_URL } from "../config.js";
import { getCurrentTime, getSevenDayForecast } from "../helper.js";

class ResultsView extends View {
  _parentElement = document.querySelector("#result-container");
  _generateMarkup() {
    console.log(this._data);
    getSevenDayForecast(this._data);
    return `      <div class="home-container">
    <div class="home-header-div"><h1 id='location-header' >${
      this._data.weatherData.name
    }, ${this._data.restData.name.common}</h1></div>
    <div class="home-main-div">
      <div class="home-today-weather-container">
        <div class="home-weather-div">
          <div class="home-today-weather-div">
            <div class="home-weather-icon">
            <img src='${WEATHER_ICONS_URL}/${
      this._data.weatherData.weather[0].icon
    }@2x.png' title = '${this._data.weatherData.weather[0].description}'></div>
            <div class="home-weather-celcius">
              <h2 id='temp-value'>${this._data.weatherData.main.temp.toFixed(
                1
              )}°C</h2>
            </div>
          </div>
          <div class="home-time-div">
            <div class="home-container01">
            <h2>${getCurrentTime()}</h2></div>
          </div>
          <div class="home-weather-details">
            <div class="home-weather-details-1">
              <div class="home-weather-details-1-1"></div>
              <div class="home-weather-details-1-2"></div>
            </div>
            <div class="home-weather-details-2">
              <div class="home-weather-details-2-1"></div>
              <div class="home-weather-details-2-2"></div>
            </div>
          </div>
        </div>
        <div id="weather-map-div">
      </div>
      <div class="home-weather-dorcast-div">
        <div class="home-container02">
          <div class="home-container03"></div>
          <div class="home-container04">
            <div class="home-container05"></div>
            <div class="home-container06"></div>
          </div>
        </div>
        <div class="home-container07">
          <div class="home-container08"></div>
          <div class="home-container09">
            <div class="home-container10"></div>
            <div class="home-container11"></div>
          </div>
        </div>
        <div class="home-container12">
          <div class="home-container13"></div>
          <div class="home-container14">
            <div class="home-container15"></div>
            <div class="home-container16"></div>
          </div>
        </div>
        <div class="home-container17">
          <div class="home-container18"></div>
          <div class="home-container19">
            <div class="home-container20"></div>
            <div class="home-container21"></div>
          </div>
        </div>
        <div class="home-container22">
          <div class="home-container23"></div>
          <div class="home-container24">
            <div class="home-container25"></div>
            <div class="home-container26"></div>
          </div>
        </div>
        <div class="home-container27">
          <div class="home-container28"></div>
          <div class="home-container29">
            <div class="home-container30"></div>
            <div class="home-container31"></div>
          </div>
        </div>
        <div class="home-container32">
          <div class="home-container33"></div>
          <div class="home-container34">
            <div class="home-container35"></div>
            <div class="home-container36"></div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  }
}

export default new ResultsView();
