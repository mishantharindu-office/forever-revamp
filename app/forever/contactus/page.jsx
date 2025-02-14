'use client'

import React, { useState } from 'react'

function Contactus () {
  // State for the currently selected location and dropdown open/close
  const [selectedLocation, setSelectedLocation] = useState('Head Office')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  // Define the details for each location
  const officeAddress =
    '287/2B, Stanley Thilakarathne Mawatha, Nugegoda, 10250 Sri Lanka'
  const officeMapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    officeAddress
  )}&t=&z=13&ie=UTF8&iwloc=&output=embed`

  const factoryCoordinates = `7°16'52.5"N 80°43'29.9"E`
  const factoryMapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    factoryCoordinates
  )}&t=&z=13&ie=UTF8&iwloc=&output=embed`

  // Determine the current map src based on selection
  const mapSrc =
    selectedLocation === 'Head Office' ? officeMapSrc : factoryMapSrc

  return (
    <>
      {/* Header Section */}
      <div className='bg-lavender h-screen sm:h-[560px]'>
        <div className='flex justify-start items-start px-[30px] sm:px-[130px] pt-10 pl-10'>
          <p className="font-['WorkSons'] hover:font-bold text-breadcrumb text-sm cursor-pointer">
            Home
          </p>
          <p className="font-['WorkSons'] text-breadcrumb text-sm">
            / Contact us
          </p>
        </div>
        <div className='flex justify-center items-center pb-10 h-full'>
          <h1 className="font-['recoleta'] font-bold text-primary text-5xl uppercase">
            Contact us
          </h1>
        </div>
      </div>

      {/* Location Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 bg-lavender w-full h-fit sm:h-screen'>
        {/* Left Column: Details & Dropdown */}
        <div className='flex items-center px-[30px] sm:px-[130px] py-10'>
          <div>
            <h2 className='mb-2 sm:mb-5 font-bold text-primary text-4xl text-start tracking-wider'>
              OUR LOCATIONS
            </h2>
            <div className='my-5'>
              <div className='relative w-full'>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className='inline-flex justify-between items-center bg-subtext mt-3 p-0 px-4 pl-3 border-primary border-b-2 focus:outline-none w-[500px] h-[35px] font-medium text-primary text-sm text-center'
                  type='button'
                >
                  <div className='flex items-center w-full h-full'>
                    <p className='absolute p-0 w-full text-base text-left'>
                      {selectedLocation}
                    </p>
                  </div>
                  <svg
                    className='ml-2 w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M19 9l-7 7-7-7'
                    ></path>
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className='z-10 absolute bg-lavender shadow divide-y divide-gray-100 w-full'>
                    <ul
                      className='py-1 font-medium text-primary text-sm'
                      aria-labelledby='dropdownDefault'
                    >
                      <li
                        className='cursor-pointer'
                        onClick={() => {
                          setSelectedLocation('Head Office')
                          setDropdownOpen(false)
                        }}
                      >
                        <p className='block hover:bg-white px-4 py-2 text-primary text-base'>
                          Head Office
                        </p>
                      </li>
                      <li
                        className='cursor-pointer'
                        onClick={() => {
                          setSelectedLocation('Factory')
                          setDropdownOpen(false)
                        }}
                      >
                        <p className='block hover:bg-white px-4 py-2 text-primary text-base'>
                          Factory
                        </p>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            {/* Display details based on selection */}
            {selectedLocation === 'Head Office' ? (
              <>
                <p className='m-0 mb-1 text-primary text-base text-start'>
                  {officeAddress}
                </p>
                <p className='m-0 mb-1 text-primary text-base text-start'>
                  +94 112 02 6868
                </p>
                <p className='m-0 mb-1 text-primary text-base text-start'>
                  info@4everskinnaturals.com
                </p>
              </>
            ) : (
              <p className='m-0 mb-1 text-primary text-base text-start'>
                {factoryCoordinates}
              </p>
            )}
          </div>
        </div>

        {/* Right Column: Map */}
        <div className='overflow-hidden'>
          <iframe
            className='w-full h-screen'
            width='600'
            height='500'
            id='gmap_canvas'
            src={mapSrc}
            frameBorder='0'
            scrolling='no'
            marginHeight='0'
            marginWidth='0'
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default Contactus
