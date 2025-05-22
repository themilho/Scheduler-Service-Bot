require("dotenv").config();

const express = require("express");
const axios = require("axios");
const { Telegraf, Markup } = require("telegraf");
const { message } = require("telegraf/filters");
const { URL_NGROK, BOT_TOKEN } = process.env

const bot = new Telegraf(BOT_TOKEN, { polling: false })
const app = express();
app.use(express.json())

const telegramApi = `https://api.telegram.org/bot${BOT_TOKEN}/setWebhook`
const webhookUrl = URL_NGROK + '/webhook'

async function setWebhook() {
    try {
        const response = await axios.post(telegramApi, {url: webhookUrl});
        if (response.data.ok){
            console.log("Webhook setado com sucesso");
        }else{
            console.error("Erro ao setar webhook", response.data)
        }
    } catch (error) {
        console.error('Erro ao fazer a requisição: ', error)
    }
}

app.post('/webhook', (req, res) => {
    bot.handleUpdate(req.body);
    res.sendStatus(200);
})

bot.start((ctx) => ctx.reply('welcome'))

app.listen(process.env.PORT || 3000, async () => {
    console.log("app running on port", process.env.PORT || 3000);
    setWebhook();
})

