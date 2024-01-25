import searchView from "./view/searchView.js";
import * as model from "./model.js";
async function controlWeatherSearch() {
  try {
    const query = searchView.getSearchItem();
    const returnValue = await model.getData(query);
    console.log(returnValue);
  } catch (err) {
    console.log(err);
  }
}

(function () {
  searchView.subscribeEvents(controlWeatherSearch);
})();
