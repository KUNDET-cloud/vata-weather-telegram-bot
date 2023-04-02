import { Telegraf, session, Scenes } from "telegraf";
import dotenv from "dotenv";

import REQUEST_TYPES from "./const.js";
import { handlers } from "./helpers/handlers.js";
import { setLocationScene } from "./helpers/scenes.js";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const stage = new Scenes.Stage([setLocationScene]);
bot.use(session());
bot.use(stage.middleware());

bot.start(async (ctx) => {
  ctx.reply("Hello");
});

bot.hears(REQUEST_TYPES.today, (ctx) => {
  ctx.reply("Current");
});
bot.hears(REQUEST_TYPES.tomorrow, (ctx) => {
  ctx.reply("Tomorrow");
});
bot.hears(REQUEST_TYPES.oneWeek, (ctx) => {
  ctx.reply("One week");
});
bot.hears(REQUEST_TYPES.twoWeek, (ctx) => {
  ctx.reply("Two weeks");
});
bot.hears(REQUEST_TYPES.changeLocation, (ctx) => {
  ctx.reply("Change location");
});

bot.on("message", (ctx) => ctx.reply("Да-да"));

bot.launch();
