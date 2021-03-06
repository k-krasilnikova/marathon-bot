import cron from "node-cron";
import difference from "lodash/difference.js";

import { CONFIG } from "../env.js";
import { REPLIES, DATE_FORMAT, COMMON_MESSAGE_TYPES } from "./constants.js";
import { sendAngryMessage, getDateInString } from "./utils.js";
import { getUsersWithReport, getReports } from "./middlewares/reports.js";
import { getAllUsersId, updateUserByChatId } from "./middlewares/users.js";
import { getCommonMessageByType } from "./middlewares/commonMessages.js";
import { getMarathon } from "./middlewares/marathons.js";
import { sendNotificationForReviewer } from "./utils.js";

export const scheduleDailyReport = (bot, chatId) => {
  const task = cron.schedule(CONFIG.SCHEDULE_TIME, async () => {
    const marathon = await getMarathon({
      isActive: true,
    });
    if (marathon) {
      const date = getDateInString().format(DATE_FORMAT);
      bot.telegram
        .sendMessage(chatId, REPLIES.DailyReport.start.concat(date), {
          reply_markup: {
            inline_keyboard: REPLIES.DailyReport.startMarkup,
          },
        })
        .catch(async (error) => {
          console.log("403 Error", chatId);
          if (error.code === 403) {
            await updateUserByChatId(chatId + 1, { isActive: false }); //TODO: REMOVE +1
          }
        });
    } else {
      task.destroy();
    }
  });
};

export const scheduleInterastingInfoSend = (bot) => {
  const task = cron.schedule(CONFIG.SCHEDULE_TIME_INFO, async () => {
    const marathon = await getMarathon({
      isActive: true,
    });
    if (marathon) {
      const allUsers = await getAllUsersId({ createdAt: { $lt: new Date() }});

      for (const user of allUsers) {
        const dateBefore = new Date().setDate(new Date().getDate() - 4);
        const reports = await getReports({
          chatId: user,
          createdAt: {
            $gte: new Date(dateBefore),
            $lt: new Date(),
          },
        });
        if (reports.length >= 3) {
          // const removeMessage = await getCommonMessageByType(
          //   COMMON_MESSAGE_TYPES.RM
          // );
          bot.telegram.sendMessage(user - 1, "lol");//removeMessage.text); //TODO REMOVE -1
        }
      }

      sendNotificationForReviewer({
        message: "Пользователям был отправлен совет с полезной информацией.",
        ctx: bot,
      });
    } else {
      task.destroy();
    }
  });
};

export const scheduleCheckingReports = (bot) => {
  const task = cron.schedule(CONFIG.SCHEDULE_TIME_ANGRY, async () => {
    const marathon = await getMarathon({
      isActive: true,
    });
    if (marathon) {
      const allUsers = await getAllUsersId({ createdAt: { $lt: new Date() } });
      const usersWithReport = await getUsersWithReport();
      const usersWithoutReport = difference(allUsers, usersWithReport);

      for (const user of usersWithoutReport) {
        sendAngryMessage(bot, user);
      }

      for (const user of allUsers) {
        const dateBefore = new Date().setDate(new Date().getDate() - 6);
        const reports = await getReports({
          chatId: user,
          createdAt: {
            $gte: new Date(dateBefore),
            $lt: new Date(),
          },
        });
        if (reports.length < 1) {
          const removeMessage = await getCommonMessageByType(
            COMMON_MESSAGE_TYPES.RM
          );
          await updateUserByChatId(user, {
            isActive: false,
          });
          bot.telegram.sendMessage(user - 1, removeMessage.text); //TODO REMOVE -1
          sendNotificationForReviewer({
            message: `Пользователь с чат-айди ${user} был удалён из системы из-за отссутствия отчётов.`,
            ctx: bot,
          });
        }
      }
    } else {
      task.destroy();
    }
  });
};
