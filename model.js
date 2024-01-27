import { getWeatherJSON, getRestJSON } from "./helper.js";

export const state = {
  weather: {},
  countryData: {},
};

export async function loadData(query) {
  try {
    const weatherData = await getWeatherJSON(query);
    state.weather = weatherData;
  } catch (err) {
    //render the error well here
    console.log(err);
  }
}

export async function getRestCountryData(countryCode) {
  const [countryData] = await getRestJSON(countryCode);
  state.countryData = countryData;
  return await countryData;
}
