const addDate = require("date-fns/addDays");

const getDateAfterXDays = (days) => {
  const finalDate = addDate(new Date(2020, 07, 22), days);
  console.log(finalDate);
  return `${finalDate.getDate()}-${
    finalDate.getMonth() + 1
  }-${finalDate.getFullYear()}`;
};

module.exports = getDateAfterXDays;
