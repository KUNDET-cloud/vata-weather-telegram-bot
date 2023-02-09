import { Telegraf, session, Scenes } from "telegraf";
import dotenv from "dotenv";

import { setLocation } from "./helpers/scenes.js";
import { commands } from "./helpers/commands.js";

let currentCity = "";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const stage = new Scenes.Stage([setLocation]);
bot.use(session());
bot.use(stage.middleware());

bot.start((ctx) => {
  commands.Start(ctx);
  commands.ShowMenu(ctx);
});
bot.command("menu", commands.ShowMenu);
bot.action("CURRENT_ACTION", async (ctx) => {
  await ctx.reply("Current wheather");
  ctx.scene.leave();
});

bot.on("message", commands.NotCommand);

bot.launch();
