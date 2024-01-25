import { API_KEY, API_URL } from "./config.js";
export const getJSON = async function (query) {
  try {
    const response = await fetch(
      `${API_URL}?q=${query}&units=metric&appid=${API_KEY}`
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
