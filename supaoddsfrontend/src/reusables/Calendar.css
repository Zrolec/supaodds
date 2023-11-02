//import React, { useState } from "react";
//import DatePicker from "react-datepicker";
/**

import "react-datepicker/dist/react-datepicker.css";

function Calendar() {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <section className="cali">
    <DatePicker className="ali" selected={startDate} onChange={(date) => setStartDate(date)} />
    </section>
    );
  };

  export default Calendar;**/
  import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Calendar.css';
const Calendar = () => {
  const [date, setDate] = useState(new Date());

  // Function to generate an array of days in the current month
  const generateDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = [];
    for (let day = firstDay; day <= lastDay; day.setDate(day.getDate() + 1)) {
      daysInMonth.push(new Date(day));
    }
    return daysInMonth;
  };

  // Handle next and previous month navigation
  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const daysInMonth = generateDaysInMonth(date);

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <h2>
          {date.toLocaleDateString('default', {
            month: 'long',
            year: 'numeric',
          })}
        </h2>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="calendar-grid">
        {daysInMonth.map((day, index) => (
          <Link key={index} to={`/page/${day.getDate()}`}>
            <div className="calendar-day">
              {day.getDate()}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
