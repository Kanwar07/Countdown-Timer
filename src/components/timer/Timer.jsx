import React, { useContext } from "react";
import { data } from "../context/Context";

function Timer() {
  const { days, hours, minutes, seconds } = useContext(data);

  return (
    <div class="flex flex-row w-vw justify-between max-sm:grid grid-cols-1">
      <div class="flex flex-col items-center border-2 border-transparent pt-2 pr-2 pb-2 pl-2 shadow-xl rounded-lg w-20 bg-[#2C3E50] text-[#ffffff] mr-2 ml-4 cursor-pointer max-sm:mb-2 mt-2 mr-4 ml-1.5">
        <div>{days}</div>
        <div>Days</div>
      </div>
      <div class="flex flex-col items-center border-2 border-transparent pt-2 pr-2 pb-2 pl-2 shadow-xl rounded-lg w-20 bg-[#2C3E50] text-[#ffffff] mr-2 ml-2 cursor-pointer max-sm:mb-2 mt-2">
        <div>{hours}</div>
        <div>Hours</div>
      </div>
      <div class="flex flex-col items-center border-2 border-transparent pt-2 pr-2 pb-2 pl-2 shadow-xl rounded-lg w-20 bg-[#2C3E50] text-[#ffffff] mr-2 ml-2 cursor-pointer max-sm:mb-2 mt-2">
        <div>{minutes}</div>
        <div>Minutes</div>
      </div>
      <div class="flex flex-col items-center border-2 border-transparent pt-2 pr-2 pb-2 pl-2 shadow-xl rounded-lg w-20 bg-[#2C3E50] text-[#ffffff] mr-4 ml-2 cursor-pointer max-sm:mb-2 mt-2">
        <div>{seconds}</div>
        <div>Seconds</div>
      </div>
    </div>
  );
}

export default Timer;
