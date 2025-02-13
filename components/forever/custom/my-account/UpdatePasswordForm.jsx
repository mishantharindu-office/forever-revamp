"use client";

import { useState } from "react";

function UpdatePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    alert("Password updated successfully!");
  };

  return (
    <div className="">
      {/* Mobile Menu Icon */}
      <div className="group lg:hidden flex hover:bg-primary mb-4 px-3 py-2 border border-primary rounded-sm w-fit cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="group-hover:text-white h-6 text-slate-800"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </div>

      {/* Page Title */}
      <div className="pb-2">
        <h2 className="font-['Recoleta'] font-bold text-primary text-4xl uppercase">
          Update Password
        </h2>
      </div>
      <hr className="divide-primary" />

      {/* Description */}
      <div className="mt-2 py-2 pl-2">
        <p className="font-['WorkSons'] font-medium text-primary text-sm">
          You can change your current password below. We require your current password to confirm
          your identity.
        </p>
      </div>

      {/* Password Change Form */}
      <form onSubmit={handleSubmit} className="flex flex-col w-full">
        <div className="mt-5 w-full md:w-3/5">
          <p className="font-['WorkSons'] text-slate-600 text-sm text-end">Required Field *</p>

          {/* Current Password Input */}
          <div className="flex items-center bg-lavender mt-2 p-1 pl-3 border-primary border-b-2 h-[55px]">
            <input
              type={showCurrent ? "text" : "password"}
              placeholder="Enter Your Current Password *"
              className="bg-transparent px-1 outline-none w-full font-['WorkSons'] text-primary placeholder:text-gray-700"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            {/* <button
              type="button"
              className="mr-2 hover:border-gray-700 w-6 h-6"
              onClick={() => setShowCurrent(!showCurrent)}
            >
              {showCurrent ? (
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M320 128c-77.4 0-140.4 54.9-161.3 128.4 20.9 73.6 83.9 128.4 161.3 128.4s140.4-54.9 161.3-128.4C460.4 182.9 397.4 128 320 128zm0 208a80 80 0 1 1 80-80 80 80 0 0 1-80 80z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M640 256s-65.9-112-192-112S256 144 192 144 0 256 0 256s65.9 112 192 112 256 0 320 0 128-112 128-112zm-320 64a64 64 0 1 1 64-64 64 64 0 0 1-64 64z"
                  />
                </svg>
              )}
            </button> */}
          </div>

          {/* New Password Input */}
          <div className="flex items-center bg-lavender mt-2 p-1 pl-3 border-primary border-b-2 h-[55px]">
            <input
              type={showNew ? "text" : "password"}
              placeholder="Enter Your New Password *"
              className="bg-transparent px-1 outline-none w-full font-['WorkSons'] text-primary placeholder:text-gray-700"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            {/* <button
              type="button"
              className="mr-2 hover:border-gray-700 w-6 h-6"
              onClick={() => setShowNew(!showNew)}
            >
              {showNew ? (
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M320 128c-77.4 0-140.4 54.9-161.3 128.4 20.9 73.6 83.9 128.4 161.3 128.4s140.4-54.9 161.3-128.4C460.4 182.9 397.4 128 320 128zm0 208a80 80 0 1 1 80-80 80 80 0 0 1-80 80z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M640 256s-65.9-112-192-112S256 144 192 144 0 256 0 256s65.9 112 192 112 256 0 320 0 128-112 128-112zm-320 64a64 64 0 1 1 64-64 64 64 0 0 1-64 64z"
                  />
                </svg>
              )}
            </button> */}
          </div>

          {/* Confirm Password Input */}
          <div className="flex items-center bg-lavender mt-2 p-1 pl-3 border-primary border-b-2 h-[55px]">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Repeat Your New Password *"
              className="bg-transparent px-1 outline-none w-full font-['WorkSons'] text-primary placeholder:text-gray-700"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {/* <button
              type="button"
              className="mr-2 hover:border-gray-700 w-6 h-6"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? "🙈" : "👁️"}
            </button> */}
          </div>
        </div>

        {/* Update Password Button */}
        <div className="flex justify-end items-center mt-4">
          <button
            type="submit"
            className="bg-primary my-3 py-3 border border-white w-[180px] font-['ProximaNova'] font-bold text-white text-sm uppercase"
          >
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdatePasswordForm;
