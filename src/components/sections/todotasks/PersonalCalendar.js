import React, {Component, useState} from 'react';
import Datepicker from "react-tailwindcss-datepicker";

export default function PersonalCalendar() {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11)
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  }

  return (
      <div className="calendar">
        <Datepicker
            primaryColor={"dark"}
            value={value}
            onChange={handleValueChange}
        />
      </div>
  );
}
