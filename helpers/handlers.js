import { getCurrentForecast } from "../service/requests.js";

export const handlers = {
  Start: async (ctx) => {
    await ctx.reply("Добро пожаловать");
  },

  //Получение погоды
  currentForecast: async (ctx) => {},
};
