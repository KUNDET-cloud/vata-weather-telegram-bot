import axios from "axios";

const API_URL = "https://api.weatherapi.com/v1/";
const SEARCH_EP = "search.json";
const CURRENT_FORECAST_EP = "current.json";
const FORECAST_EP = "forecast.json";

// Поиск города
export async function searchLocality() {
  const config = {
    params: {
      q: location,
      key: process.env.WHEATHER_API_KEY,
      lang: "ru",
    },
  };
  try {
    let response = await axios.get(API_URL + SEARCH_EP, config);
    return response.data;
  } catch (err) {
    return null;
  }
}

// Получение текущей погоды
export async function getCurrentForecast(location) {
  const config = {
    params: {
      q: location,
      key: process.env.WHEATHER_API_KEY,
      lang: "ru",
    },
  };
  try {
    let response = await axios.get(API_URL + CURRENT_FORECAST_EP, config);
    return response.data;
  } catch (err) {
    return null;
  }
}

// Получение пргноза на завтра
export async function getTomorrowForecast(location) {
  const config = {
    params: {
      q: location,
      key: process.env.WHEATHER_API_KEY,
      lang: "ru",
      days: "2",
    },
  };
  try {
    let response = await axios.get(API_URL + FORECAST_EP, config);
    return response[1].data;
  } catch (err) {
    return null;
  }
}
