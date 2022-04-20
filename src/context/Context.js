export const ATTENDANCE_START_HOUR = 0;
export const ATTENDANCE_END_HOUR = 24;

export const BONUS_START_HOUR = 20;
export const BONUS_END_HOUR = 24;

export const BONUS_DAYS = [];

export const IS_COMPLETE = (attendanceYn) => {
  if (attendanceYn === "Y") {
    return "COMPLETE";
  } else if (attendanceYn === "B") {
    return "BONUS";
  } else if (attendanceYn === "B1") {
    return "BONUS";
  } else if (attendanceYn === "B2") {
    return "BONUS";
  } else {
    return false;
  }
};

export const IS_NOT_COMPLETE = (index, today) => {
  switch (index) {
    case 0:
      return today === 1 ? "DAY1" : "SOON";
    case 1:
      return today === 2 ? "DAY2" : "SOON";
    case 2:
      return today === 3 ? "DAY3" : "SOON";
    case 3:
      return today === 4 ? "DAY4" : "SOON";
    case 4:
      return today === 5 ? "DAY5" : "SOON";
    case 5:
      return today === 6 ? "DAY6" : "SOON";
    case 6:
      return today === 7 ? "DAY7" : "SOON";
    case 7:
      return today === 8 ? "DAY8" : "SOON";
    case 8:
      return today === 9 ? "DAY9" : "SOON";
    case 9:
      return today === 10 ? "DAY10" : "SOON";
    case 10:
      return today === 11 ? "DAY11" : "SOON";
    case 11:
      return today === 12 ? "DAY12" : "SOON";
    case 12:
      return today === 13 ? "DAY13" : "SOON";
    case 13:
      return today === 14 ? "DAY14" : "SOON";
    case 14:
      return today === 15 ? "DAY15" : "SOON";
    case 15:
      return today === 16 ? "DAY16" : "SOON";
    case 16:
      return today === 17 ? "DAY17" : "SOON";
    case 17:
      return today === 18 ? "DAY18" : "SOON";
    case 18:
      return today === 19 ? "DAY19" : "SOON";
    case 19:
      return today === 20 ? "DAY20" : "SOON";
    case 20:
      return today === 21 ? "DAY21" : "SOON";
    case 21:
      return today === 22 ? "DAY22" : "SOON";
    default:
      return false;
  }
};

export const IS_BONUS = (index, today) => {
  switch (index) {
    case 0:
      return today >= 1 ? "DAY1" : "SOON";
    case 1:
      return today >= 2 ? "DAY2" : "SOON";
    case 2:
      return today >= 3 ? "DAY3" : "SOON";
    case 3:
      return today >= 4 ? "DAY4" : "SOON";
    case 4:
      return today >= 5 ? "DAY5" : "SOON";
    case 5:
      return today >= 6 ? "DAY6" : "SOON";
    case 6:
      return today >= 7 ? "DAY7" : "SOON";
    case 7:
      return today >= 8 ? "DAY8" : "SOON";
    case 8:
      return today >= 9 ? "DAY9" : "SOON";
    case 9:
      return today >= 10 ? "DAY10" : "SOON";
    case 10:
      return today >= 11 ? "DAY11" : "SOON";
    case 11:
      return today >= 12 ? "DAY12" : "SOON";
    case 12:
      return today >= 13 ? "DAY13" : "SOON";
    case 13:
      return today >= 14 ? "DAY14" : "SOON";
    case 14:
      return today >= 15 ? "DAY15" : "SOON";
    case 15:
      return today >= 16 ? "DAY16" : "SOON";
    case 16:
      return today >= 17 ? "DAY17" : "SOON";
    case 17:
      return today >= 18 ? "DAY18" : "SOON";
    case 18:
      return today >= 19 ? "DAY19" : "SOON";
    case 19:
      return today >= 20 ? "DAY20" : "SOON";
    case 20:
      return today >= 21 ? "DAY21" : "SOON";
    case 21:
      return today >= 22 ? "DAY22" : "SOON";
    default:
      return false;
  }
};
