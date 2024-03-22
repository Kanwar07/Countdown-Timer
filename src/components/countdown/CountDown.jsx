import React, { useContext } from "react";
import { data } from "../context/Context";
import DateInput from "../dateinput/DateInput";
import Timer from "../timer/Timer";

function CountDown() {
  const {
    date,
    setdate,
    time,
    settime,
    setdays,
    sethours,
    setminutes,
    setseconds,
    alert,
    setalert,
    interval,
    setinterval,
  } = useContext(data);

  const checkValidation = () => {
    const selectedDate = `${date}T${time}`;
    const currentDate = new Date();
    const maxDate = new Date();
    maxDate.setDate(currentDate.getDate() + 100);
    return new Date(selectedDate) > maxDate;
  };

  const handletimer = () => {
    if (interval) {
      resettimer();
      checkValidation();
    } else if (!checkValidation()) {
      starttimer();
    } else {
      setalert("Selected time is more than 100 days");
    }
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
      setalert("See you at the end of your adventure");
      if (timedifference < 0) {
        clearInterval(countdown);
        setdays(0);
        sethours(0);
        setminutes(0);
        setseconds(0);
        setalert("Your countdown is over! What's next on your adventure?");
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

  const cancelTimer = () => {
    clearInterval(interval);
    localStorage.removeItem("selectedDate");
    localStorage.removeItem("selectedTime");
    setdate("");
    settime("");
    setdays(0);
    sethours(0);
    setminutes(0);
    setseconds(0);
    setalert("Start your Adventure");
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
        <div>
          <button
            class="border-2 p-2 rounded-lg mr-2 ml-4"
            onClick={handletimer}
          >
            {interval ? "Pause Timer" : "Start Timer"}
          </button>
          <button
            class="border-2 p-2 rounded-lg mr-4 ml-2"
            onClick={cancelTimer}
          >
            Cancel Timer
          </button>
        </div>
        <Timer />
        <div class="italic font-medium">{alert}</div>
      </div>
    </>
  );
}

export default CountDown;
