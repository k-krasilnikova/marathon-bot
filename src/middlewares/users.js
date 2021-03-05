import User from "../models/user.js";

export const createUser = async (props) => {
  let user = await getUserByChatId(props.chatId);
  if (!user) {
    user = await User.create({
      chatId: props.chatId,
      fullName: props.fullName,
      weight: props.weight,
      height: props.height,
      age: props.age,
      isActive: true,
    });
  } else if (user && !user.isActive) {
    user = await updateUserByChatId(user.chatId, { isActive: true });
  }
  return user;
};

export const getUserByChatId = async (chatId) => {
  const user = await User.findOne({
    chatId,
  });
  return user;
};

export const getAllUsers = async () => {
  const users = await User.find({ isTrainer: false, isActive: true });
  return users;
};

export const getAllUsersId = async ({ ...props }) => {
  const usersFullInfo = await User.find({
    isTrainer: false,
    isActive: true,
    ...props,
  });
  const usersIds = usersFullInfo.map((user) => user.chatId);
  return usersIds;
};

export const getTrainer = async () => {
  const trainerInfo = await User.findOne({ isTrainer: true });
  return trainerInfo;
};

export const updateUserByChatId = async (chatId, props) => {
  const user = await User.findOneAndUpdate(
    { chatId },
    { $set: { ...props } },
    { new: true, useFindAndModify: false }
  );
  return user;
};

export const clearUsers = async () => {
  const users = await User.deleteMany({ isTrainer: false });
};
