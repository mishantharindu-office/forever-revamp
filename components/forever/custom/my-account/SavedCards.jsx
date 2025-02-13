import React from "react";

const SavedCards = () => {
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

      {/* Saved Cards Content */}
      <div className="pl-4 sm:pl-16 w-full">
        {/* Page Title */}
        <div className="pb-2 border-primary border-b">
          <h2 className="font-['Recoleta'] font-bold text-primary text-4xl">Saved Cards</h2>
        </div>

        {/* No Cards Message */}
        <div className="py-4">
          <p className="font-['WorkSons'] font-bold text-primary text-base uppercase">
            You currently have no cards saved
          </p>
        </div>

        {/* Information Box */}
        <div className="p-8 border-2 border-primary">
          <p className="font-['WorkSons'] font-medium text-primary text-base">
            You can save any of your credit/debit card details when you place orders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SavedCards;
