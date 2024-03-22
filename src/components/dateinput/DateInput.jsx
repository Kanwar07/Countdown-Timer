import React, { useContext } from "react";
import { data } from "../context/Context";

function DateInput() {
  const { date, setdate, time, settime } = useContext(data);

  const handledate = (event) => {
    setdate(event.target.value);
  };

  const handletime = (event) => {
    settime(event.target.value);
  };

  return (
    <div>
      <input
        type="date"
        class="bg-transparent mr-2 ml-4"
        value={date}
        onChange={handledate}
      />
      <input
        type="time"
        class="bg-transparent ml-2 mr-4"
        value={time}
        onChange={handletime}
      />
    </div>
  );
}

export default DateInput;
