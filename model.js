import { getJSON } from "./helper.js";
export async function getData(query) {
  try {
    return await getJSON(query);
  } catch (err) {
    //render the error well here
    console.log(err);
  }
}
