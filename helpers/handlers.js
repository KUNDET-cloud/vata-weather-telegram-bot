import Send from "./interface.js";
import Get from "../service/requests.js";

export default class Handlers {
  static SetLocation = async (ctx) => ctx.scene.enter("SET_LOCATION")

  static async TodayForecast (ctx) {
    let res = await Get.Forecast(1);
    Send.TodayForecast(ctx, res);
  }

  static async TomorrowForecast (ctx) {
    let res = await Get.Forecast(2);
    Send.TomorrowForecast(ctx, res);
  }

  static async SeveralDaysForecast (ctx) {
    let res = await Get.Forecast(3);
    Send.SeveralDaysForecast(ctx, res);
  }
  
  static Menu = (ctx) => Send.Menu(ctx)
};
