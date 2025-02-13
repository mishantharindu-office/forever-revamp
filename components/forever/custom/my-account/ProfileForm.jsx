"use client";

import { useState } from "react";

const countryCodes = [
    { name: "Afghanistan", code: "+93" },
    { name: "Albania", code: "+355" },
    { name: "Algeria", code: "+213" },
    { name: "Australia", code: "+61" },
    { name: "Canada", code: "+1" },
    { name: "India", code: "+91" },
    { name: "Sri Lanka", code: "+94" },
    { name: "United Kingdom", code: "+44" },
    { name: "United States", code: "+1" },
];

function ProfileForm() {
    const [firstName, setFirstName] = useState("Mishan Tharindu");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("mishantharindu.abacuslk@gmail.com");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedCountryCode, setSelectedCountryCode] = useState("+94"); // Default to Sri Lanka
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="">
            {/* Mobile Menu Button */}
            <div className="group lg:hidden flex hover:bg-green-700 mb-4 px-3 py-2 border border-green-700 rounded-sm w-fit cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:text-white h-6 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>

            {/* Profile Heading */}
            <div>
                <h2 className="font-bold text-green-900 text-4xl uppercase">Profile</h2>
                <hr className="my-2 border-green-700" />
                <p className="font-medium text-green-900 text-sm">
                    You can view and change your profile details below.
                </p>
            </div>

            {/* Profile Form */}
            <div className="space-y-4 mt-4">
                {/* First Name */}
                <div className="flex flex-col bg-gray-100 p-2 border-green-700 border-b-2 h-[55px]">
                    <label className="text-gray-700 text-xs">First Name *</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        className="bg-transparent outline-none w-full text-green-900 placeholder-gray-700"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>

                {/* Last Name */}
                <div className="flex flex-col bg-gray-100 p-2 border-green-700 border-b-2 h-[55px]">
                    <label className="text-gray-700 text-xs">Last Name *</label>
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="bg-transparent outline-none w-full text-green-900 placeholder-gray-700"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col bg-gray-100 p-2 border-green-700 border-b-2 h-[55px]">
                    <label className="text-gray-700 text-xs">Email *</label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="bg-transparent outline-none w-full text-green-900 placeholder-gray-700"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Phone Number Section */}
                <div className="flex space-x-3">
                    {/* Country Code Dropdown */}
                    <div className="relative w-1/3">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex justify-between items-center bg-gray-100 p-2 border-green-700 border-b-2 w-full h-[55px] text-left"
                        >
                            <div>
                                <p className="text-xs">Country Code *</p>
                                <p className="text-sm">{selectedCountryCode}</p>
                            </div>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        {/* Dropdown */}
                        {dropdownOpen && (
                            <div className="absolute bg-white shadow-md mt-1 border border-gray-300 w-full max-h-40 overflow-y-auto">
                                {countryCodes.map((country, index) => (
                                    <div
                                        key={index}
                                        className="hover:bg-gray-200 px-4 py-2 text-sm cursor-pointer"
                                        onClick={() => {
                                            setSelectedCountryCode(country.code);
                                            setDropdownOpen(false);
                                        }}
                                    >
                                        {country.name} ({country.code})
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Phone Number Input */}
                    <div className="flex flex-col flex-grow bg-gray-100 p-2 border-green-700 border-b-2 h-[55px]">
                        <label className="text-gray-700 text-xs">Phone Number *</label>
                        <input
                            type="number"
                            placeholder="Phone Number"
                            className="bg-transparent outline-none w-full text-green-900 placeholder-gray-700"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                    <button className="bg-green-900 hover:bg-green-800 py-3 border border-white w-[180px] font-bold text-white text-sm uppercase transition">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfileForm;
