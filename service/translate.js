import translate from "translate";

export const locationTranslate = async (location) => {
  await translate(location, {
    to: "ru",
    from: "en",
  });
};
