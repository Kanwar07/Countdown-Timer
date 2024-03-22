import React, { useContext, useEffect } from "react";
import { data } from "../context/Context";

function DateInput() {
  const { date, setdate, time, settime } = useContext(data);

  useEffect(() => {
    const storedDate = localStorage.getItem("selectedDate");
    if (storedDate) {
      setdate(storedDate);
    }
    const storedTime = localStorage.getItem("selectedTime");
    if (storedTime) {
      settime(storedTime);
    }
  }, [setdate, settime]);

  const handledate = (event) => {
    setdate(event.target.value);
    localStorage.setItem("selectedDate", event.target.value);
  };

  const handletime = (event) => {
    settime(event.target.value);
    localStorage.setItem("selectedTime", event.target.value);
  };

  return (
    <div>
      <input
        type="date"
        class="bg-transparent mr-2 ml-4 cursor-pointer"
        value={date}
        onChange={handledate}
      />
      <input
        type="time"
        class="bg-transparent ml-2 mr-4 cursor-pointer"
        value={time}
        onChange={handletime}
      />
    </div>
  );
}

export default DateInput;
