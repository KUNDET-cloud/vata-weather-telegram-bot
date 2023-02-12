import axios from "axios";

export const API_URL = "https://api.weatherapi.com/v1/";
export const SEARCH_ENDPOINT = "search.json";
export const CURRENT_FORECAST = "current.json";
export const TOMORROW_FORECAST = "search.json";
export const WEEK_FORECAST = "search.json";
export const TWO_WEEK_FORECAST = "search.json";

// Текущая погода
export const getCurrentForecast = async (location) => {
  const config = {
    params: {
      q: location,
      key: process.env.WHEATHER_API_KEY,
      lang: "ru",
    },
  };
  try {
    let response = await axios.get(API_URL + CURRENT_FORECAST, config);
    return response.data;
  } catch (err) {
    return null;
  }
};
