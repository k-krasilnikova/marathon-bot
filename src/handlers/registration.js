import Scene from "telegraf/scenes/base.js";

import { REPLIES } from "../constants.js";
import { sendNotificationForReviewer } from "../utils.js";
import { createUser } from "../middlewares/users.js";

const registrationHandler = async (bot, stage) => {
  bot.start((ctx) => {
    console.log(ctx.chat.id);
    ctx.telegram.sendMessage(ctx.chat.id, REPLIES.Registration.start);
    ctx.scene.enter("getFullName");
  });

  const getFullName = new Scene("getFullName");
  stage.register(getFullName);
  getFullName.on("text", async (ctx) => {
    ctx.session.fullName = ctx.message.text;
    ctx.reply(REPLIES.Registration.age);
    await ctx.scene.leave("getFullName");
    ctx.scene.enter("getAge");
  });

  const getAge = new Scene("getAge");
  stage.register(getAge);
  getAge.on("text", async (ctx) => {
    ctx.session.age = ctx.message.text;
    ctx.reply(REPLIES.Registration.height);
    await ctx.scene.leave("getAge");
    ctx.scene.enter("getHeight");
  });

  const getHeight = new Scene("getHeight");
  stage.register(getHeight);
  getHeight.on("text", async (ctx) => {
    ctx.session.height = ctx.message.text;
    ctx.reply(REPLIES.Registration.weight);
    await ctx.scene.leave("getHeight");
    ctx.scene.enter("getWeight");
  });

  const getWeight = new Scene("getWeight");
  stage.register(getWeight);
  getWeight.on("text", async (ctx) => {
    ctx.session.weight = ctx.message.text;
    ctx.reply(REPLIES.Registration.end);

    const props = {
      chatId: ctx.chat.id + 1 || 0, //TODO: REMOVE PLUS ONE
      fullName: ctx.session.fullName,
      weight: ctx.session.weight,
      height: ctx.session.height,
      age: ctx.session.age,
    };

    await createUser(props);
    const message = `✅ Новый пользователь зарегистрирован в системе.\nПолное имя: ${props.fullName},\nВозраст: ${props.age} (года/лет),\nРост: ${props.height} (см),\nВес: ${props.weight} (кг)`;
    sendNotificationForReviewer({ message, ctx });
    await ctx.scene.leave("getWeight");
  });

  bot.on("left_chat_participant", function (message) {
    // 'message' is a Telegram Message

    // 'user' below is a Telegram User
    const user = message["left_chat_participant"];
    console.log(message);
    console.log(user);
  });
};

export default registrationHandler;
