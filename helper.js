import {
  WEATHER_API_KEY,
  WEATHER_API_URL,
  REST_API_URL,
  WEATHER_SEVEN_DAY_FORECAST_API_URL,
} from "./config.js";
export const getWeatherJSON = async function (query) {
  try {
    const response = await fetch(
      `${WEATHER_API_URL}?q=${query}&units=metric&appid=${WEATHER_API_KEY}`
    );
    if (!response.ok) {
      throw new Error(`Failed to Fetch (${response.status})`);
    }
    return await response.json();
  } catch (err) {
    // render the error well here
    console.log(err);
  }
};

export async function getRestJSON(countryCode) {
  try {
    const response = await fetch(`${REST_API_URL}/${countryCode}`);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export function getCurrentTime() {
  const now = new Date(Date.now());
  return `${now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
}

export async function getSevenDayForecast(weatherObject) {
  try {
    const response = await fetch(
      `${WEATHER_SEVEN_DAY_FORECAST_API_URL}?lat=${weatherObject.weatherData.coord.lat}&lon=${weatherObject.weatherData.coord.lon}&cnt=7&appid=${WEATHER_API_KEY}`
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {}
}
