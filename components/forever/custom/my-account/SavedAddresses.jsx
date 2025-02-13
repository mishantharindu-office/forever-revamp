import React, { useState } from "react";

const SavedAddresses = () => {
  const [addresses, setAddresses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    recipient: "",
    phone: "",
    address1: "",
    address2: "",
    town: "",
    postcode: ""
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Adding New Address
  const handleAddAddress = () => {
    if (formData.recipient && formData.phone && formData.address1 && formData.town && formData.postcode) {
      setAddresses([...addresses, formData]);
      setFormData({ recipient: "", phone: "", address1: "", address2: "", town: "", postcode: "" });
      setShowModal(false);
    }
  };

  // Handle Removing an Address
  const handleRemoveAddress = (index) => {
    setAddresses(addresses.filter((_, i) => i !== index));
  };

  return (
    <div className="">
      {/* Mobile Toggle Button */}
      <div className="group lg:hidden flex hover:bg-primary mb-4 px-3 py-2 border border-primary rounded-sm w-fit cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="group-hover:text-white h-6 text-slate-800">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>

      {/* Page Title */}
      <div className="pb-2">
        <h2 className="font-['Recoleta'] font-bold text-primary text-4xl uppercase">Saved Addresses</h2>
      </div>
      <hr className="divide-primary" />

      {/* Info Text */}
      <div className="mt-2 py-2 pl-2">
        <p className="font-['WorkSons'] font-medium text-primary text-sm">
          You can add new delivery addresses, edit them and remove any added addresses below.
        </p>
      </div>

      {/* Address Management */}
      <div className="mt-5 w-full md:w-3/5">
        <div className="flex justify-between items-center w-full">
          <p className="font-['WorkSons'] font-bold text-primary text-base uppercase">Addresses</p>
          <p
            className="font-['WorkSons'] font-medium text-primary hover:text-red-900 text-sm underline cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            + Add New Address
          </p>
        </div>

        {/* Address List */}
        <div className="space-y-3 mt-4">
          {addresses.length === 0 ? (
            <p className="text-gray-500 text-sm">No saved addresses yet.</p>
          ) : (
            addresses.map((address, index) => (
              <div key={index} className="flex justify-between items-center bg-secondary/50 p-3 rounded-md">
                <p className="text-primary text-sm">{address.recipient} - {address.address1}, {address.town}</p>
                <button
                  className="text-red-600 text-sm hover:underline"
                  onClick={() => handleRemoveAddress(index)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Add Address Modal */}
      {showModal && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white shadow-xl px-10 py-10 rounded-md w-[28%]">
            {/* Close Button */}
            <div className="flex justify-end w-full">
              <svg
                aria-hidden="true"
                className="w-5 h-5 hover:text-red-900 cursor-pointer"
                onClick={() => setShowModal(false)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path fill="currentColor" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path>
              </svg>
            </div>

            <h4 className="pb-2 font-['WorkSons'] text-primary text-base">Add New Address</h4>
            <hr />

            {/* Address Form */}
            <div className="space-y-2 mt-4">
              {["recipient", "phone", "address1", "address2", "town", "postcode"].map((field, index) => (
                <div key={index} className="bg-lavender p-1 pl-3 border-primary border-b-2 h-[55px]">
                  <label className="font-['WorkSons'] text-gray-700 text-xs">{field.replace(/([A-Z])/g, ' $1').trim()}</label>
                  <input
                    type={field === "phone" || field === "postcode" ? "number" : "text"}
                    name={field}
                    placeholder={field.replace(/([A-Z])/g, ' $1').trim()}
                    className="bg-transparent px-1 outline-none w-full font-['WorkSons'] text-primary placeholder:text-gray-700"
                    value={formData[field]}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-5">
              <button className="bg-primary hover:bg-slate-900 px-8 py-3 text-white text-sm" onClick={handleAddAddress}>
                Add New Address
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 px-4 py-3 text-primary text-sm" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedAddresses;
