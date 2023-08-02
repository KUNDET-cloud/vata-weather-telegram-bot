import { Scenes,session } from "telegraf";

import { Get } from "../service/requests.js";
import { Send } from "./interface.js";

//Установить город
const setLocationScene = new Scenes.BaseScene("SET_LOCATION");

setLocationScene.enter(ctx => ctx.reply("Где вы хотите посмотреть погоду?"));

setLocationScene.on("text", async (ctx) => {
  let res = await Get.SearchLocation(ctx.message.text);
  if (res.length == 0) return Send.LocationNotFound(ctx);
  const foundLocation = res[0];
  await Send.Location(ctx, foundLocation);  
  session.location = foundLocation.name;
  return ctx.scene.leave();
});

setLocationScene.leave(ctx => Send.Menu(ctx));

export const stage = new Scenes.Stage([setLocationScene])