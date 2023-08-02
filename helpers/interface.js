import { Markup } from "telegraf";

import { ACTIONS } from "../const.js";

// Переписать в статичные классы
export const Send = {
  Menu: (ctx) => {
    ctx.reply(
      "Выберите действие: ",
      Markup.keyboard([
        [ACTIONS.TODAY, ACTIONS.TOMORROW],
        [ACTIONS.ONE_WEEK, ACTIONS.TWO_WEEKS],
        [ACTIONS.CHANGE_LOCATION],
      ]).resize()
    );
  },

  TodayForecast: (ctx, res) => {
    if (res == null) {
      ctx.reply("Возникла ошибка :/\nПовторите позже");
      return;
    }
    const location = `🏙  ${res.location.country}, ${res.location.name}`;
    res = res.forecast.forecastday[0].day;

    const condition = `💬  ${res.condition.text}`;
    const temperature = `🌡  Температура ${res.maxtemp_c}°C`;
    const wind = `💨  Ветер ${res.maxwind_kph}км/ч`;
        
    ctx.replyWithHTML(`        
<i>${location}</i>

<b>Погода на сегодня:</b>
<b>${condition}</b>
<b>${temperature}</b>
<b>${wind}</b>`);

    const iconUrl =  `https:${res.condition.icon.replace("64x64", "128x128")}`;

    ctx.replyWithPhoto({ url: iconUrl });
  },

  TomorrowForecast: (ctx, res) => {
    ctx.replyWithHTML(`<b>Сам жирный</b>
    <i>Курсив</i>
    `)
  },
  OneWeekForecast: (ctx, res) => {
    ctx.reply('One week')
  },
  TwoWeeksForecast: (ctx, res) => {
    ctx.reply('Two weeks')
  },
  Location: (ctx, res) => ctx.reply(`Установлено местоположение:\n${res.country}, ${res.region}, ${res.name}`),
  LocationNotFound: ctx => ctx.reply('Такого города не найдено!\nПопробуйте еще раз.'),
};
