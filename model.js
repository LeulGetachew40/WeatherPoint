import { getJSON } from "./helper.js";

export const state = {
  weather: {},
};

export async function loadData(query) {
  try {
    const weatherData = await getJSON(query);
    state.weather = weatherData;
  } catch (err) {
    //render the error well here
    console.log(err);
  }
}
