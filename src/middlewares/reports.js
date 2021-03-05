import Report from "../models/report.js";
import { getPreviousDay } from "../utils.js";

export const createReport = async (props) => {
  let report = await getReportByDate(props.date, props.chatId);
  if (report) {
    report = await Report.updateOne(
      { date: props.date, chatId: props.chatId },
      { ...props }
    );
  } else {
    report = await Report.create({
      ...props,
      reaction: null,
    });
  }
  return report;
};

export const getReportByDate = async (date, chatId) => {
  const report = await Report.findOne({
    date,
    chatId,
  });
  return report;
};

export const getUsersWithReport = async () => {
  const yesterday = getPreviousDay(1);
  const reports = await Report.find({ date: yesterday });
  const users = reports.map((report) => report.chatId);
  return users || [];
};

export const clearReports = async () => {
  const reports = await Report.deleteMany({});
};

export const getReports = async (props) => {
  const reports = await Report.find({
    ...props,
  });
  return reports || [];
};
