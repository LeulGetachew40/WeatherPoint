import searchView from "./view/searchView.js";
import * as model from "./model.js";
async function controlWeatherSearch() {
  try {
    const query = searchView.getSearchItem();
    const returnValue = await model.getData(query);
    console.log(returnValue);
    console.log(
      "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card"
    );
  } catch (err) {
    console.log(err);
  }
}

(function () {
  searchView.subscribeEvents(controlWeatherSearch);
})();
