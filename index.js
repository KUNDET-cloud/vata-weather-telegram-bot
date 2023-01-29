const { Telegraf } = require("telegraf");

// const bot = new Telegraf(process.env.BOT_TOKEN);
const bot = new Telegraf("6098143359:AAE1RgZmfTR5plv0UzOu-OaYH6xZycslPpQ");
bot.start((ctx) => ctx.reply("Welcome"));
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on("sticker", (ctx) => ctx.reply("👍"));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
