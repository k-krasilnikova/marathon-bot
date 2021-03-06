import Scene from "telegraf/scenes/base.js";

import { DATE_FORMAT, COMMON_MESSAGE_TYPES } from "../constants.js";
import { getDateInString, checkIsTrainer } from "../utils.js";
import {
  getAllUsers,
  updateUserByChatId,
  clearUsers,
} from "../middlewares/users.js";
import { clearReports } from "../middlewares/reports.js";
import { getCommonMessageByType } from "../middlewares/commonMessages.js";
import { createMarathon, updateMarathon } from "../middlewares/marathons.js";
import { scheduleDailyReport, scheduleInterastingInfoSend } from "../scheduler.js";

const trainerHandler = async (bot, stage) => {
  bot.command("/start_marathon", async (ctx) => {
    const isTrainer = await checkIsTrainer(ctx.chat.id);
    if (isTrainer) {
      const startMessage = await getCommonMessageByType(
        COMMON_MESSAGE_TYPES.ST
      );

      const date = getDateInString().format(DATE_FORMAT);
      const clients = await getAllUsers();
      const { alreadyExist } = await createMarathon({
        startDate: date,
        countOfUsers: clients.length,
      });

      if (!alreadyExist) {
        clients.map((client) => {
          ctx.telegram.sendMessage(client.chatId - 1, startMessage.text); //TODO: REMOVE -1
          scheduleDailyReport(bot, client.chatId - 1); //TODO: REMOVE -1
        });
        scheduleInterastingInfoSend()
      }

      let message = alreadyExist
        ? "Марафон уже запущен."
        : "Марафон успешно стартовал 🐣";
      ctx.reply(message);
    } else {
      ctx.reply("Недостаточно прав для данной команды.");
    }
  });

  bot.command("/end_marathon", async (ctx) => {
    const isTrainer = await checkIsTrainer(ctx.chat.id);
    if (isTrainer) {
      const startMessage = await getCommonMessageByType(
        COMMON_MESSAGE_TYPES.EN
      );

      const date = getDateInString().format(DATE_FORMAT);
      const { exist } = await updateMarathon({
        endDate: date,
        isActive: false,
      });

      if (exist) {
        const clients = await getAllUsers();
        clients.map((client) => {
          ctx.telegram.sendMessage(client.chatId - 1, startMessage.text); //TODO: REMOVE -1
        });
        await clearReports();
        await clearUsers();
      }

      let message = exist
        ? "Марафон успешно закончен 🐓"
        : "В системе нет активного марафона, чтобы его завершить.";
      ctx.reply(message);
    } else {
      ctx.reply("Недостаточно прав для данной команды.");
    }
  });

  bot.command("/clients", async (ctx) => {
    const isTrainer = await checkIsTrainer(ctx.chat.id);
    if (isTrainer) {
      const clients = await getAllUsers();
      let message = "Активные пользователи системы:\n\n";
      clients.map(
        (client) => (message += `✅ ${client.fullName} ${client.chatId}\n`)
      );
      ctx.reply(message);
    } else {
      ctx.reply("Недостаточно прав для данной команды.");
    }
  });

  bot.command("/remove", async (ctx) => {
    const isTrainer = await checkIsTrainer(ctx.chat.id);
    if (isTrainer) {
      let message = "Введите чат-айди пользователя, которого хотите удалить.";
      ctx.reply(message);
      ctx.scene.enter("getChatIdToRemove");
    } else {
      ctx.reply("Недостаточно прав для данной команды.");
    }
  });
  const getChatIdToRemove = new Scene("getChatIdToRemove");
  stage.register(getChatIdToRemove);
  getChatIdToRemove.on("text", async (ctx) => {
    ctx.session.chatId = Number(ctx.message.text);
    const updatedUser = await updateUserByChatId(ctx.session.chatId, {
      isActive: false,
    });
    if (updatedUser) {
      ctx.telegram.sendMessage(
        updatedUser.chatId,
        "Тренер принял решение удалить Вас из системы."
      );
      ctx.reply(
        `Пользователь ${updatedUser.fullName} успешно удалён из марафона.`
      );
    } else {
      ctx.reply("Такого пользователя в системе нет.");
    }
    await ctx.scene.leave("getChatIdToRemove");
  });
};

export default trainerHandler;
