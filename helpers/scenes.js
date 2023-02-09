import { Scenes } from "telegraf";

export const setLocation = new Scenes.BaseScene("SET_LOCATION");

setLocation.enter((ctx) => {
  ctx.reply("Введите город");
});
setLocation.leave((ctx) => {
  ctx.reply("Город установлен");
});
setLocation.on("text", async (ctx) => {
  ctx.reply("nice");
  ctx.scene.leave();
});
