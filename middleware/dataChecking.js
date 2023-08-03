import { session } from "telegraf";

import Handlers from "../helpers/handlers.js";

export function isLocationSet(ctx, next) {
    return (session.location == undefined) ? Handlers.SetLocation(ctx): next();
}