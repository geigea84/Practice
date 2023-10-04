// https://edabit.com/challenge/3hdXjfJozQySRC3gE

function getDays(date1, date2) {
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(Math.abs((date2 - date1) / oneDayInMilliseconds));
    console.log(diffDays);
}

getDays(
    new Date("June 14, 2019"),
    new Date("June 20, 2019")
  ) // 6
  
  
  getDays(
    new Date("December 29, 2018"),
    new Date("January 1, 2019")
  ) // 3
  // Dates may not all be in the same month/year.
  
  
  getDays(
    new Date("July 20, 2019"),
    new Date("July 30, 2019")
  ) // 10
