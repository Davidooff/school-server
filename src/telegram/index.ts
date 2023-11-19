import { env } from "process";

const TelegramAPI = require("node-telegram-bot-api");

class TelegramService {
  bot = new TelegramAPI(env.TELEGRAM_API, { polling: true });

  sendMessage(msg: string) {
    this.bot.sendMessage(env.YOURE_ID, msg);
  }
}

export default new TelegramService();
