import searchView from "./view/searchView.js";
import resultsView from "./view/resultsView.js";
import mapView from "./view/mapView.js";
import * as model from "./model.js";
async function controlWeatherSearch() {
  try {
    const query = searchView.getSearchItem();
    await model.loadData(query);
    const weatherData = model.state.weather;
    const restData = await model.getRestCountryData(
      model.state.weather.sys.country
    );
    resultsView.render({
      weatherData,
      restData,
    });
    mapView.renderMap(weatherData);
  } catch (err) {
    console.log(err);
  }
}

(function () {
  searchView.subscribeEvents(controlWeatherSearch);
})();
