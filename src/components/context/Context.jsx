import React, { createContext, useState } from "react";

export const data = createContext();

function Contextdata({ children }) {
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [selecteddate, setselecteddate] = useState("");
  const [days, setdays] = useState(0);
  const [hours, sethours] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [seconds, setseconds] = useState(0);
  const [alert, setalert] = useState("Start your Adventure");
  const [interval, setinterval] = useState(null);

  return (
    <data.Provider
      value={{
        date,
        setdate,
        time,
        settime,
        selecteddate,
        setselecteddate,
        days,
        setdays,
        hours,
        sethours,
        minutes,
        setminutes,
        seconds,
        setseconds,
        alert,
        setalert,
        interval,
        setinterval,
      }}
    >
      {children}
    </data.Provider>
  );
}

export default Contextdata;
