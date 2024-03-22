import React, { useContext } from "react";
import { data } from "../context/Context";
import DateInput from "../dateinput/DateInput";
import Timer from "../timer/Timer";

function CountDown() {
  const {
    date,
    time,
    setdays,
    sethours,
    setminutes,
    setseconds,
    alert,
    setalert,
    interval,
    setinterval,
  } = useContext(data);

  const handletimer = () => {
    if (interval) resettimer();
    else starttimer();
  };

  const starttimer = () => {
    if (interval) {
      clearInterval(interval);
    }
    let countdown = setInterval(function () {
      let dateTimeString = `${date}T${time}`;
      let selecteddate = new Date(dateTimeString).getTime();
      let currentdate = new Date().getTime();
      let timedifference = selecteddate - currentdate;

      let days = Math.floor(timedifference / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (timedifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (timedifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((timedifference % (1000 * 60)) / 1000);

      setdays(days);
      sethours(hours);
      setminutes(minutes);
      setseconds(seconds);
      setalert("See you at the end");
      if (timedifference < 0) {
        clearInterval(countdown);
        setdays(0);
        sethours(0);
        setminutes(0);
        setseconds(0);
        setalert("Adventure Done");
      }
    }, 1000);
    setinterval(countdown);
  };

  const resettimer = () => {
    clearInterval(interval);
    setdays(0);
    sethours(0);
    setminutes(0);
    setseconds(0);
    setalert("Start your Adventure again");
    setinterval(null);
  };

  return (
    <>
      <div class="flex flex-col justify-between items-center bg-gradient-to-r from-[#BDC3C7] to-[#2C3E50] h-screen pb-[10%] pt-[5%]">
        <div class="text-[34px]">
          <span class="text-[#ffffff]">CountDown</span>{" "}
          <span class="text-[#2C3E50]">Timer</span>
        </div>
        <div class="border-2 p-2 rounded-lg">
          <DateInput />
        </div>
        <button class="border-2 p-2 rounded-lg" onClick={handletimer}>
          {interval ? "Reset Timer" : "Start Timer"}
        </button>
        <Timer />
        <div>{alert}</div>
      </div>
    </>
  );
}

export default CountDown;
