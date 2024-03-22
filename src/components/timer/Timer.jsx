import React, { useContext } from "react";
import { data } from "../context/Context";

function Timer() {
  const { days, hours, minutes, seconds } = useContext(data);

  return (
    <div class="flex flex-row w-2/6 justify-between">
      <div class="flex flex-col items-center border-2 border-transparent pt-2 pr-2 pb-2 pl-2 shadow-xl rounded-lg w-20 bg-[#2C3E50] text-[#ffffff]">
        <div>{days}</div>
        <div>Days</div>
      </div>
      <div class="flex flex-col items-center border-2 border-transparent pt-2 pr-2 pb-2 pl-2 shadow-xl rounded-lg w-20 bg-[#2C3E50] text-[#ffffff]">
        <div>{hours}</div>
        <div>Hours</div>
      </div>
      <div class="flex flex-col items-center border-2 border-transparent pt-2 pr-2 pb-2 pl-2 shadow-xl rounded-lg w-20 bg-[#2C3E50] text-[#ffffff]">
        <div>{minutes}</div>
        <div>Minutes</div>
      </div>
      <div class="flex flex-col items-center border-2 border-transparent pt-2 pr-2 pb-2 pl-2 shadow-xl rounded-lg w-20 bg-[#2C3E50] text-[#ffffff]">
        <div>{seconds}</div>
        <div>Seconds</div>
      </div>
    </div>
  );
}

export default Timer;
