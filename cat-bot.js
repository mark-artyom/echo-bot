const {Telegraf} = require('telegraf');

const bot = new Telegraf('YOUR_BOT_TOKEN');

const chatId = 376648768;//замените на свое значение, подробнее ниже
const intervalMs = 5000;
const getCatUrl = () => `https://cataas.com/cat?t=${new Date().getTime()}`;

const sendCat = () => {
    bot.telegram.sendPhoto(chatId, getCatUrl()).then(() => setTimeout(sendCat, intervalMs));
}

sendCat();