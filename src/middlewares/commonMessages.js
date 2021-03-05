import CommonMessage from "../models/commonMessage.js";

export const getCommonMessageByType = async (type) => {
  const commonMessage = await CommonMessage.findOne({ type });

  return commonMessage || {};
};
