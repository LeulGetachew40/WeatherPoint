import searchView from "./view/searchView.js";
import resultsView from "./view/resultsView.js";
import * as model from "./model.js";
async function controlWeatherSearch() {
  try {
    const query = searchView.getSearchItem();
    await model.loadData(query);
    resultsView.render(model.state.weather);
  } catch (err) {
    console.log(err);
  }
}

(function () {
  searchView.subscribeEvents(controlWeatherSearch);
})();
