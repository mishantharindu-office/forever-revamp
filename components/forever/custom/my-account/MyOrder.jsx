import React, { useState } from "react";

const MyOrders = () => {
  const [activeTab, setActiveTab] = useState("pending");

  return (
    <div className="">
      {/* Mobile Toggle Button */}
      <div className="group lg:hidden flex hover:bg-primary mb-4 px-3 py-2 border border-primary rounded-sm w-fit cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="group-hover:text-white h-6 text-slate-800"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>

      {/* Page Title */}
      <div className="pb-4 border-primary border-b">
        <h2 className="font-['Recoleta'] font-bold text-primary text-4xl">My Orders</h2>
      </div>

      <div className="py-2 pl-2"></div>

      {/* Order Tabs */}
      <div className="bg-white pb-1">
        <div className="flex justify-evenly w-full h-10">
          <button
            className={`flex items-center justify-center w-full h-full font-medium font-['WorkSons'] text-base cursor-pointer ${
              activeTab === "pending"
                ? "bg-primary text-white hover:bg-slate-900"
                : "bg-secondary text-primary hover:bg-slate-900 hover:text-white"
            }`}
            onClick={() => setActiveTab("pending")}
          >
            Pending Orders
          </button>

          <button
            className={`flex items-center justify-center w-full h-full font-medium font-['WorkSons'] text-base cursor-pointer ${
              activeTab === "history"
                ? "bg-primary text-white hover:bg-slate-900"
                : "bg-secondary text-primary hover:bg-slate-900 hover:text-white"
            }`}
            onClick={() => setActiveTab("history")}
          >
            Order History
          </button>
        </div>

        {/* Order Content */}
        <div className="flex justify-between items-center mb-5 px-[30px] sm:px-[130px]">
          <div className="flex justify-center items-center w-full">
            {activeTab === "pending" ? (
              <p className="text-primary text-lg">Showing Pending Orders...</p>
            ) : (
              <p className="text-primary text-lg">Showing Order History...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
