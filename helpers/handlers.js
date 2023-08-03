import Send from "./interface.js";
import { Get } from "../service/requests.js";

export default class Handlers {
  static SetLocation = async (ctx) => ctx.scene.enter("SET_LOCATION")

  static async TodayForecast (ctx) {
    let res = await Get.TodayForecast();
    Send.TodayForecast(ctx, res);
  }

  static async TomorrowForecast (ctx) {
    let res = await Get.TomorrowForecast();
    Send.TomorrowForecast(ctx, res);
  }

  static async OneWeekForecast (ctx) {
    // let res = await Get.TodayForecast();
    let res = ''
    Send.OneWeekForecast(ctx, res);
  }
  static async TwoWeeksForecast (ctx) {
    // let res = await Get.TodayForecast();
    let res = ''
    Send.TwoWeeksForecast(ctx, res);
  }
  static Menu = (ctx) => Send.Menu(ctx)
};
