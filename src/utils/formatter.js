import dayjs from 'dayjs';

export const formatDate = () => {
  let date = dayjs().format('YYYY-MM-DD, HH:mm:ss');
  return date;
};

export const formatCardNumber = value => {
  let getFirstFourDigit = value.slice(0, 4);
  let getLastFourDigit = value.slice(12, 16);
  let getCardFormatted = getFirstFourDigit + '********' + getLastFourDigit;
  return getCardFormatted;
};
