import { Telegraf, session, Scenes } from "telegraf";
import dotenv from "dotenv";

import { handlers } from "./helpers/handlers.js";
import { setLocationScene } from "./helpers/scenes.js";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const stage = new Scenes.Stage([setLocationScene]);
bot.use(session());
bot.use(stage.middleware());

bot.start(async (ctx) => {
  await handlers.Start(ctx);
  await ctx.scene.enter("SET_LOCATION");
});
bot.command("menu", handlers.Menu);
bot.hears("Погода сейчас", (ctx) => {
  console.log(ctx);
});
bot.on("message", (ctx) => ctx.reply("Да-да"));

bot.launch();
