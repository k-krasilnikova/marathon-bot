import lowerCase from "lodash/lowerCase.js";
import moment from "moment";

import { REPLIES, FALSE_ANSWER, DATE_FORMAT } from "./constants.js";
import {
  getTrainer,
  getAllUsers,
  getUserByChatId,
} from "./middlewares/users.js";
import { getRandomMessage } from "./middlewares/angryMessages.js";
import { getMarathon } from "./middlewares/marathons.js";
import { scheduleDailyReport, scheduleInterastingInfoSend } from "./scheduler.js";

export const sendNotificationForReviewer = async ({
  message,
  ctx,
  additionalProps,
}) => {
  const trainer = await getTrainer();
  ctx.telegram.sendMessage(trainer.chatId, message, { ...additionalProps });
};

export const restartApplication = async (bot) => {
  const marathon = await getMarathon({
    isActive: true,
  });
  if (marathon) {
    const users = await getAllUsers();
    const usersWithoutTrainer = users.filter((user) => !user.isTrainer);
    for (const user of usersWithoutTrainer) {
      scheduleDailyReport(bot, user.chatId);
    }
    scheduleInterastingInfoSend(bot);
    console.log(bot.telegram.messages);
  }
};

export const sendAngryMessage = async (bot, user) => {
  console.log("Send angry message to:", user);
  const angryMessage = await getRandomMessage();
  bot.telegram.sendMessage(
    user,
    angryMessage ? angryMessage.text : REPLIES.AngryMessage,
    {
      parse_mode: "MarkdownV2",
      disable_notification: true,
    }
  );
};

export const isFalseAnswer = (answer) =>
  lowerCase(answer) === lowerCase(FALSE_ANSWER);

export const getDateInString = (date = "") =>
  moment(date || new Date(), DATE_FORMAT);

export const getPreviousDay = (dayBefore = 1) =>
  moment().subtract(dayBefore, "days").format(DATE_FORMAT);

export const checkIsTrainer = async (chatId) => {
  const user = await getUserByChatId(chatId);
  return user.isTrainer;
};
