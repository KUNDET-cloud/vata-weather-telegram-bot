import { Telegraf, session } from "telegraf";
import dotenv from "dotenv";

import { Send } from "./helpers/interface.js";
import { Handler } from "./helpers/handlers.js";
import { ACTIONS } from "./const.js";
import {stage} from './helpers/scenes.js'

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(session());
bot.use(stage.middleware());


bot.start(Handler.SetLocation);

bot.command("menu", Send.Menu);

bot.hears(ACTIONS.TODAY, Handler.TodayForecast);
bot.hears(ACTIONS.TOMORROW, Handler.TomorrowForecast);
bot.hears(ACTIONS.ONE_WEEK, Handler.OneWeekForecast);
bot.hears(ACTIONS.TWO_WEEKS, Handler.TwoWeeksForecast);
bot.hears(ACTIONS.CHANGE_LOCATION, Handler.SetLocation);

bot.on("message", (ctx) => ctx.reply("Да-да"));

bot.launch();
