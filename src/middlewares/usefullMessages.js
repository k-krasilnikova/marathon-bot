import UsefullMessage from "../models/usefullMessage.js";

export const getUsefullMessage = async () => {
  const usefullMessage = await UsefullMessage.findOne({ isUsed: false });

  return usefullMessage;
};


export const setUsedUsefullMessage = async (id) => {
  const usefullMessage = await UsefullMessage.findOneAndUpdate(
    { _id: id },
    { $set: { isUsed: true } },
    { new: true, useFindAndModify: false }
  );
  
  return usefullMessage || {};
};


export const clearMessageStatuses = async () => {
  await UsefullMessage.updateMany(
    {isUsed: true},
    { $set: { isUsed: false } },
 )
};
