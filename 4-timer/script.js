"use strict";

const data = {
  newYearDate: null,
};

const page = {
  timer: document.querySelector(".timer").children
};

const formatDateTime = (num, unit, locale = "ru") => {
  return new Intl.NumberFormat(locale, { style: "unit", unit: unit, unitDisplay: "long" }).format(num);
};

const initNewYearDate = (date) => {
  const year = date.getFullYear();
  data.newYearDate = new Date(year, 11, 31, 23, 59);
};

const deltaDateUnit = (date, unit) => {
  if (unit === "month") {
    return data.newYearDate.getMonth() - date.getMonth();
  }
  if (unit === "day") {
    return data.newYearDate.getDate() - date.getDate();
  }
  if (unit === "hour") {
    return data.newYearDate.getHours() - date.getHours();
  }
  if (unit === "minute") {
    return data.newYearDate.getMinutes() - date.getMinutes();
  }
  if (unit === "second") {
    return 60 - (date.getSeconds() - data.newYearDate.getSeconds());
  }
};

function render(date) {
  for (const element of page.timer) {
    const delta = deltaDateUnit(date, element.id);
    const formatString = formatDateTime(delta, element.id);
    if (element.innerHTML !== formatString) {
      element.innerHTML = formatString;
    }
  }
}

(() => {
  initNewYearDate(new Date());
  setInterval(() => {
    render(new Date());
  }, 1000);
})();
