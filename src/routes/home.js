import { AppRoute } from "./index.js";

const APP_NAME = process.env.APP_NAME || "My Express App";

export const route = new AppRoute("/", "get", async (req, res) => {
  res.render("layout/main", { VIEW: "home", APP_NAME, TITLE: "Home", BASE_URL: process.env.BASE_URL || "" });
});