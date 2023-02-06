import { Telegraf, Markup } from "telegraf";
import axios from "axios";
import dotenv from "dotenv";
import translate from "translate";

const GET_LOCALITY_URL = "https://api.weatherapi.com/v1/search.json";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);
let location;

bot.start((ctx) => {
  ctx.reply(
    "Добро пожаловать к Tlepsh!\nЯ предсказываю погоду\nВведите ваш город :"
  );
});

bot.on("message", async (ctx) => {
  let city = ctx.message.text.replace(/\s/g, "");
  city = await translate(city, { from: "ru", to: "en" });
  location = await getLocality(city);
  ctx.reply(`Погода в ${location.city}`);
});

bot.hears("Да, то что нужно!", (ctx) => {
  ctx.reply("WORks");
});

const getLocality = async (locality) => {
  const config = {
    params: {
      q: locality,
      key: process.env.WHEATHER_API_KEY,
    },
  };
  let response = await axios.get(GET_LOCALITY_URL, config);
  return response.data[0];
};

bot.launch();
