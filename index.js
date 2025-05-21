require ("dotenv").config();

const express = require("express");
const axios = require("axios");
const {Telegraf, Markup} = require("telegraf");
const {message} = require("telegraf/filters");
const {urlNgrok, botToken} = process.env

const bot = new Telegraf(botToken)
const app = express();
app.use(express.json())
const telegramApi = `https://api.telegram.org/bot${botToken}`

// const webHookUrl = urlNgrok + botToken



app.listen(process.env.PORT || 3000, async () => {
    console.log("app running on port", process.env.PORT || 3000);    
})

