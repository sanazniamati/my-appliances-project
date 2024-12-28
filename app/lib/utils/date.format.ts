/** @format */

export const convertDateFormat = (myDate: string, languge: string): string => {
  const date = new Date(myDate);
  let formattedDate: string;
  if (languge === "fa") {
    const option: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      calendar: "persian",
    };
    formattedDate = new Intl.DateTimeFormat(languge, option).format(date);
  } else {
    formattedDate = formatDateToEnglish(date);
  }

  return formattedDate;
};

const formatDateToEnglish = (myDate: Date) => {
  const year = myDate.getFullYear();
  const month = String(myDate.getMonth() + 1).padStart(2, "0");
  const day = String(myDate.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
};
