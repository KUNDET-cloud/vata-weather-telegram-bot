import { Markup } from "telegraf";

import REQUEST_TYPES from "./const.js";

// Тут должно быть:
// Вывод меню
// Вывод информации о погоде

export const OUTPUT = {
  Today: (ctx, data) => {},
  Tomorrow: (ctx, data) => {},
  OneWeek: (ctx, data) => {},
  TwoWeeks: (ctx, data) => {},

  Menu: (ctx) => {
    ctx.reply(
      "Вот вам меню",
      Markup.keyboard([
        [REQUEST_TYPES.today, REQUEST_TYPES.tomorrow],
        [REQUEST_TYPES.oneWeek, REQUEST_TYPES.twoWeeks],
        [REQUEST_TYPES.changeLocation],
      ])
    );
  },
};
