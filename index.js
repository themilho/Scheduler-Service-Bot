require ("dotenv").config();

const express = require("express");
const axios = require("axios");
const {Telegraf} = require("telegraf");
const {message} = require("telegraf/filters");

const app = express();
app.use(express.json())

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Bem-vindo!'))
bot.launch()


app.listen(process.env.PORT || 3000, async () => {
    console.log("app running on port", process.env.PORT || 3000);    
})

