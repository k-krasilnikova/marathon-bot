import Marathon from "../models/marathon.js";

export const createMarathon = async (props) => {
  let activeMarathon = await getMarathon({ isActive: true });
  let alreadyExist = false;
  if (activeMarathon) {
    alreadyExist = true;
  } else {
    activeMarathon = await Marathon.create({
      startDate: props.startDate,
      endDate: undefined,
      isActive: true,
      countOfUsers: props.countOfUsers,
      deadline: undefined,
    });
  }
  return { activeMarathon, alreadyExist };
};

export const getMarathon = async (props) => {
  const marathon = await Marathon.findOne({ ...props });
  return marathon;
};

export const updateMarathon = async (props) => {
  let activeMarathon = await getMarathon({ isActive: true });
  let exist = false;
  if (activeMarathon) {
    exist = true;
    activeMarathon = await Marathon.findOneAndUpdate(
      { isActive: true },
      { $set: { ...props } },
      { new: true, useFindAndModify: false }
    );
  }
  return { activeMarathon, exist };
};
