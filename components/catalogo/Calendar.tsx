"use client";

import React from "react";
import { Calendar as CalendarNext } from "@nextui-org/react";

const Calendar = () => {
  /* let isDateUnavailable = (date) =>
    isWeekend(date, locale) ||
    bussiDates.some(
      (interval) =>
        date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0,
    ); */

  return (
    <section className="flex flex-row gap-2">
      <CalendarNext
        aria-label="Date (Unavailable)" /* 
        isDateUnavailable={isDateUnavailable} */
      />
    </section>
  );
};

export default Calendar;
