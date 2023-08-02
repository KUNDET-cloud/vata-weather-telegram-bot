import { Send } from "./interface.js";
import { Get } from "../service/requests.js";

export const Handler = {
  SetLocation: async ctx => ctx.scene.enter("SET_LOCATION"),

  TodayForecast: async (ctx) => {
    let res = await Get.TodayForecast();
    Send.TodayForecast(ctx, res);
  },

  TomorrowForecast: async (ctx) => {
    // let res = await Get.TodayForecast();
    let res = ''
    Send.TomorrowForecast(ctx, res);
  },

  OneWeekForecast: async (ctx) => {
    // let res = await Get.TodayForecast();
    let res = ''
    Send.OneWeekForecast(ctx, res);
  },
  TwoWeeksForecast: async (ctx) => {
    // let res = await Get.TodayForecast();
    let res = ''
    Send.TwoWeeksForecast(ctx, res);
  },

};
