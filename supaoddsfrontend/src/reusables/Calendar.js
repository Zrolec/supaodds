import React, { useState } from "react";
import DatePicker from "react-datepicker";
import './Calendar.css';

import "react-datepicker/dist/react-datepicker.css";

function Calendar() {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <section className="cali">
    <DatePicker className="ali" selected={startDate} onChange={(date) => setStartDate(date)} />
    </section>
    );
  };

  export default Calendar;