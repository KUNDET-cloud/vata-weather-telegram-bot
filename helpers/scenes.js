import { Scenes } from "telegraf";
import translate from "translate";

import { getCurrentForecast } from "../service/getWeather.js";
import { handlers } from "./handlers.js";

//Установить город
export const setLocationScene = new Scenes.BaseScene("SET_LOCATION");
setLocationScene.enter((ctx) => ctx.reply("Где вы хотите посмотреть погоду?"));
setLocationScene.on("text", async (ctx) => {
  let city = await translate(ctx.message.text, { from: "ru", to: "en" });
  ctx.reply("Ищю ваш город...⌛");
  let res = await getCurrentForecast(city);
  if (!res) {
    return ctx.reply("Такого города не найдено, попробуйте еще раз");
  }
  let location = `${res.location.name}, ${res.location.region}, ${res.location.country}`;
  location = await translate(location, { from: "en", to: "ru" });
  ctx.session.location = location;
  await ctx.reply(`Установлен город ${location}`);
  await handlers.Menu(ctx);
  ctx.scene.leave();
});
