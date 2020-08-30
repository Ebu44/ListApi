const express = require("express");
const connectDatabase = require("./Database/connectDatabase");
const dotenv = require("dotenv");
const api = require("./routers");

dotenv.config({
  path: "./config/env/config.env",
});

connectDatabase();

const app = express();

app.use(express.json());

app.use("/", api);

app.listen(5000, () => {
  console.log("Bağlandı");
});
