import React from "react";

function NavBar() {
  return (
    <>
      <div class="flex p-4 justify-around w-screen bg-gradient-to-r from-[#BDC3C7] to-[#2C3E50]">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4em' height='4em' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.5'%3E%3Cpath d='M8 10.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C8.801 9 9.034 9 9.5 9s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C10.199 17 9.966 17 9.5 17s-.699 0-.883-.076a1 1 0 0 1-.54-.541C8 16.199 8 15.966 8 15.5zm5 0c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C13.801 9 14.034 9 14.5 9s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 16.199 13 15.966 13 15.5z'/%3E%3Cpath stroke-linecap='round' d='M10 2h4M7.5 5.204A9 9 0 1 1 4.204 8.5'/%3E%3C/g%3E%3C/svg%3E"
          alt="stopwatch"
        />
        <div class="border-2 text-[20px] italic flex items-center pl-4 pr-4 shadow-xl rounded-lg cursor-pointer">
          Start your Adventure Time
        </div>
      </div>
    </>
  );
}

export default NavBar;
