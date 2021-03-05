import AngryMessage from "../models/angryMessage.js";

export const getRandomMessage = async () => {
  const angryMessages = await AngryMessage.find({});
  const randomNumber = Math.floor(
    Math.random() * Math.floor(angryMessages.length)
  );

  return angryMessages[randomNumber];
};
