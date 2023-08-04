import axios from "axios";
import { session } from "telegraf";

export default class Get {

  static async Forecast (daysCount) {
    const URL = "http://api.weatherapi.com/v1/forecast.json";
    const config = {
      params: {
        key: process.env.WEATHER_API_KEY,
        q: session.location,
        lang: "ru",
        days: daysCount,
      },
    };
    try {
      const response = await axios.get(URL, config);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async SearchLocation (location) {
    const URL = "http://api.weatherapi.com/v1/search.json";
    const config = {
      params: {
        key: process.env.WEATHER_API_KEY,
        q: location,
        lang: "ru",
      },
    };
    try {
      const response = await axios.get(URL, config);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }

  }
}

