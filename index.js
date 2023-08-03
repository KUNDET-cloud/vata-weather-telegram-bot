import { Telegraf, session } from "telegraf";
import dotenv from "dotenv";

import Handlers from "./helpers/handlers.js";
import { ACTIONS } from "./const.js";
import {stage} from './helpers/scenes.js'
import {isLocationSet} from './middleware/dataChecking.js'

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(session());
bot.use(stage.middleware());

bot.start(Handlers.SetLocation);
bot.command("menu", Handlers.Menu);

bot.hears(ACTIONS.TODAY, isLocationSet, Handlers.TodayForecast);
bot.hears(ACTIONS.TOMORROW, isLocationSet, Handlers.TomorrowForecast);
bot.hears(ACTIONS.ONE_WEEK, isLocationSet, Handlers.OneWeekForecast);
bot.hears(ACTIONS.TWO_WEEKS, isLocationSet, Handlers.TwoWeeksForecast);
bot.hears(ACTIONS.CHANGE_LOCATION, Handlers.SetLocation);

bot.on("message", (ctx) => ctx.reply("Да-да"));

bot.launch();
