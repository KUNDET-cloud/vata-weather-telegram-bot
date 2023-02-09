import { Markup } from "telegraf";

export const commands = {
  Start: (ctx) => {
    ctx.reply("Started");
  },
  NotCommand: (ctx) => {
    ctx.reply("Я тебя не понимаю : /");
  },
  ShowMenu: (ctx) => {
    ctx.reply(
      "Выберите действие",
      Markup.keyboard([
        ["Погода сейчас", "Погода на завтра"],
        ["Погода на 3 дня", "Погода на неделю"],
        ["Поменять город"],
      ]).resize()
    );
  },
};
