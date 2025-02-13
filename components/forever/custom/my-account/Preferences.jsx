'use client'

import { useState } from 'react'

function Preferences () {
  const [emailChecked, setEmailChecked] = useState(true)
  const [smsChecked, setSmsChecked] = useState(false)
  const [email, setEmail] = useState('mishantharindu.abacuslk@gmail.com')
  const [phone, setPhone] = useState('')

  return (
    <div className='lg:pl-16 w-full lg:w-[75%]'>
      {/* Mobile Menu Icon */}
      <div className='group lg:hidden flex hover:bg-primary mb-4 px-3 py-2 border border-primary rounded-sm w-fit cursor-pointer'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          aria-hidden='true'
          className='group-hover:text-white h-6 text-slate-800'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4 6h16M4 12h16M4 18h16'
          ></path>
        </svg>
      </div>

      {/* Page Title */}
      <div className='pb-2'>
        <h2 className="font-['Recoleta'] font-bold text-primary text-4xl uppercase">
          Preferences
        </h2>
      </div>
      <hr className='divide-primary' />

      {/* Description */}
      <div className='mt-2 py-2 pl-2'>
        <p className="font-['WorkSons'] font-medium text-primary text-sm">
          Your preferred notification options are listed below.
        </p>
      </div>

      {/* Preferences Section */}
      <div className='w-full'>
        {/* Email Notification */}
        <div className='flex items-center'>
          <div
            className={`relative border border-primary hover:border-gray-700 w-6 h-6 cursor-pointer ${
              emailChecked ? 'bg-primary text-white' : 'bg-white'
            }`}
            onClick={() => setEmailChecked(!emailChecked)}
          >
            {emailChecked && (
              <svg
                aria-hidden='true'
                focusable='false'
                className='top-0 left-0 absolute m-0.5 w-5 h-5 text-white'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
              >
                <path
                  fill='currentColor'
                  d='M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z'
                ></path>
              </svg>
            )}
          </div>
          <p className="mt-2 ml-4 pb-2 font-['WorkSons'] font-medium text-primary text-sm cursor-pointer">
            Email
          </p>
        </div>

        {/* Email Input */}
        {emailChecked && (
          <div className='flex-col flex-grow justify-end items-end bg-lavender mt-2 p-1 pl-3 border-primary border-b-2 h-[55px]'>
            <label className='bg-transparent pl-1 font-[WorkSons] text-gray-700 text-xs'>
              Email *
            </label>
            <input
              type='email'
              placeholder='Email'
              className="bg-transparent px-1 outline-none w-full font-['WorkSons'] text-primary placeholder:text-gray-700"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        )}

        {/* SMS Notification */}
        <div className='flex items-center mt-4'>
          <div
            className={`relative border border-primary hover:border-gray-700 w-6 h-6 cursor-pointer ${
              smsChecked ? 'bg-primary text-white' : 'bg-white'
            }`}
            onClick={() => setSmsChecked(!smsChecked)}
          >
            {smsChecked && (
              <svg
                aria-hidden='true'
                focusable='false'
                className='top-0 left-0 absolute m-0.5 w-5 h-5 text-white'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
              >
                <path
                  fill='currentColor'
                  d='M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z'
                ></path>
              </svg>
            )}
          </div>
          <p className="mt-2 ml-4 pb-2 font-['WorkSons'] font-medium text-primary text-sm cursor-pointer">
            SMS
          </p>
        </div>

        {/* Phone Number Input */}
        {smsChecked && (
          <div className='flex-col flex-grow justify-end items-end bg-lavender mt-2 p-1 pl-3 border-primary border-b-2 h-[55px]'>
            <label className='bg-transparent pl-1 font-[WorkSons] text-gray-700 text-xs'>
              Phone Number *
            </label>
            <input
              type='number'
              placeholder='Phone Number'
              className="bg-transparent px-1 outline-none w-full font-['WorkSons'] text-primary placeholder:text-gray-700"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Save Changes Button */}
      <div className='flex justify-end items-center mt-4'>
        <button className="bg-primary my-3 py-3 border border-white w-[180px] font-['ProximaNova'] font-bold text-white text-sm uppercase">
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default Preferences
