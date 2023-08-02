import axios from "axios";
import { session } from "telegraf";

export const Get = {
  
  TodayForecast: async () => {
    const URL = "http://api.weatherapi.com/v1/forecast.json";
    const config = {
      params: {
        key: process.env.WEATHER_API_KEY,
        q: session.location,
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
  },


  SearchLocation: async (location) => {
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
  },

};
