import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-blue-800 py-4 text-white flex items-center static">
        <div className="flex items-center mx-auto max-w-4xl space-x-7">
          <div className="">
            <i class="fa-brands fa-paypal fa-2xl "></i>
          </div>

          <div className="text-base">Home</div>

          <div className="text-base">Finances</div>
          <div className="text-base">Send and Request</div>
          <div className="text-base">Deals</div>
          <div className="text-base">Wallet</div>

          <div className="text-base bg-blue-900 px-3 py-2 rounded-full">
            Activity
          </div>

          <div className="text-base">Help</div>

          <div className="pl-10 flex items-center space-x-4 text-base">
            <i class="fa-solid fa-bell"></i>
            <i class="fa-sharp fa-solid fa-gear"></i>
            <span className="uppercase">Log out</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
