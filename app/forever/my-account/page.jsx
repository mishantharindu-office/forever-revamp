'use client'

import MyOrders from '@/components/forever/custom/my-account/MyOrder'
import PointsandRewords from '@/components/forever/custom/my-account/PointsandRewords'
import Preferences from '@/components/forever/custom/my-account/Preferences'
import ProfileForm from '@/components/forever/custom/my-account/ProfileForm'
import SavedAddresses from '@/components/forever/custom/my-account/SavedAddresses'
import SavedCards from '@/components/forever/custom/my-account/SavedCards'
import UpdatePasswordForm from '@/components/forever/custom/my-account/UpdatePasswordForm'
import UserProfile from '@/components/forever/custom/my-account/UserProfile'
import Wishlist from '@/components/forever/custom/my-account/Wishlist'
import React, { useState } from 'react'

function MyAccount () {
  const [activeComponent, setActiveComponent] = useState('MyAccount')

  const renderComponent = () => {
    switch (activeComponent) {
      case 'MyAccount':
        return <UserProfile />
      case 'Profile':
        return <ProfileForm />
      case 'Preferences':
        return <Preferences />
      case 'UpdatePassword':
        return <UpdatePasswordForm />
      case 'Wishlist':
        return <Wishlist/>
      case 'Pointsandrewords':
        return <PointsandRewords />
      case 'MyOrders':
        return <MyOrders />
      case 'SavedAddress':
        return <SavedAddresses />
      case 'SaveCards':
        return <SavedCards />
      case 'Logout':
        return <SavedAddresses />
      default:
        return <UserProfile />
    }
  }

  return (
    <>
      <section className='bg-gray-50 h-full text-[#004236]'>
        <div class='flex flex-col justify-center items-center pb-10 h-full'>
          <div class='flex mt-8 px-[30px] sm:px-[130px] w-full h-fit'>
            <div class='hidden lg:flex bg-white lg:w-[25%]'>
              <div class='bg-white py-4'>
                <ul class='bg-white'>
                  <li
                    class='bg-white hover:bg-gray-100 py-1 pl-3 cursor-pointer'
                    onClick={() => setActiveComponent('MyAccount')}
                  >
                    <div class='flex justify-start items-center py-2 pl-2 text-primary'>
                      <div class='w-8 h-8'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='19.5'
                          height='26'
                          viewBox='0 0 19.5 26'
                        >
                          <g data-name='user (3)' fill='#004236'>
                            <path
                              data-name='Path 2888'
                              d='M12.5 13A6.5 6.5 0 106 6.5a6.5 6.5 0 006.5 6.5zm0-10.833A4.333 4.333 0 118.167 6.5 4.333 4.333 0 0112.5 2.167z'
                              transform='translate(-3) translate(.25)'
                            ></path>
                            <path
                              data-name='Path 2889'
                              d='M12.75 14A9.761 9.761 0 003 23.75a1.083 1.083 0 102.167 0 7.583 7.583 0 0115.167 0 1.083 1.083 0 002.167 0A9.761 9.761 0 0012.75 14z'
                              transform='translate(-3) translate(0 1.167)'
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <p class="pl-3 font-['WorkSons'] font-medium text-primary text-lg">
                        My Account
                      </p>
                    </div>
                  </li>
                  <li
                    className='bg-white hover:bg-gray-100 py-1 pl-3 cursor-pointer'
                    onClick={() => setActiveComponent('Profile')}
                  >
                    <div class='flex justify-start items-center py-2 pl-2 text-primary'>
                      <div class='w-8 h-8'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='23'
                          height='23'
                          viewBox='0 0 23 23'
                        >
                          <path
                            data-name='Path 2886'
                            d='M18.208 0H4.792A4.8 4.8 0 000 4.792v13.416A4.8 4.8 0 004.792 23h13.416A4.8 4.8 0 0023 18.208V4.792A4.8 4.8 0 0018.208 0zm-11.5 21.083v-.958a4.792 4.792 0 119.583 0v.958zm14.375-2.875a2.875 2.875 0 01-2.875 2.875v-.958a6.708 6.708 0 10-13.417 0v.958a2.875 2.875 0 01-2.875-2.875V4.792a2.875 2.875 0 012.876-2.875h13.416a2.875 2.875 0 012.875 2.875z'
                            fill='#004236'
                          ></path>
                          <path
                            data-name='Path 2887'
                            d='M11.833 4a3.833 3.833 0 103.833 3.833A3.833 3.833 0 0011.833 4zm0 5.75a1.917 1.917 0 111.917-1.917 1.917 1.917 0 01-1.917 1.917z'
                            transform='translate(-.333 -.167)'
                            fill='#004236'
                          ></path>
                        </svg>
                      </div>
                      <p class="pl-3 font-['WorkSons'] font-medium text-primary text-lg">
                        Profile
                      </p>
                    </div>
                  </li>
                  <li
                    class='bg-white hover:bg-gray-100 py-1 pl-3 cursor-pointer'
                    onClick={() => setActiveComponent('Preferences')}
                  >
                    <div class='flex justify-start items-center py-2 pl-2 text-primary'>
                      <div class='w-8 h-8'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='23.699'
                          height='23.7'
                          viewBox='0 0 23.699 23.7'
                        >
                          <g
                            data-name='settings (3)'
                            transform='translate(-.15 -.15)'
                            fill='none'
                            stroke='#004236'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='1.7'
                          >
                            <circle
                              data-name='Ellipse 5'
                              cx='3'
                              cy='3'
                              r='3'
                              transform='translate(9 9)'
                            ></circle>
                            <path
                              data-name='Path 2894'
                              d='M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.663 1.663 0 00-2.82 1.18V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.663 1.663 0 00-1.18-2.82H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.663 1.663 0 002.82 1.18l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z'
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <p class="pl-3 font-['WorkSons'] font-medium text-primary text-lg">
                        Preferences
                      </p>
                    </div>
                  </li>
                  <li class='bg-white hover:bg-gray-100 py-1 pl-3 cursor-pointer' onClick={() => setActiveComponent("UpdatePassword")}>
                    <div class='flex justify-start items-center py-2 pl-2 text-primary'>
                      <div class='w-8 h-8'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='20'
                          height='24.003'
                          viewBox='0 0 20 24.003'
                        >
                          <g
                            data-name='01 align center'
                            transform='translate(-2 .003)'
                            fill='#004236'
                          >
                            <path
                              data-name='Path 2892'
                              d='M7 8V7a5 5 0 019.375-2.422l1.749-.971A7 7 0 005 7v1H2v13a3 3 0 003 3h14a3 3 0 003-3V8zm13 13a1 1 0 01-1 1H5a1 1 0 01-1-1V10h16z'
                            ></path>
                            <path
                              data-name='Rectangle 847'
                              transform='translate(11 14)'
                              d='M0 0H2V4H0z'
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <p class="pl-3 font-['WorkSons'] font-medium text-primary text-lg">
                        Update Password
                      </p>
                    </div>
                  </li>
                </ul>
                <ul class='bg-white mt-6'>
                  <li class='bg-white hover:bg-gray-100 py-1 pl-3 cursor-pointer' onClick={() => setActiveComponent("Wishlist")}>
                    <div class='flex justify-start items-center py-2 pl-2 text-primary'>
                      <div class='w-8 h-8'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='21.75'
                          height='19.514'
                          viewBox='0 0 21.75 19.514'
                        >
                          <path
                            d='M15.852 1.917a5.782 5.782 0 00-4.982 3.052 5.782 5.782 0 00-4.982-3.052A6.239 6.239 0 000 8.438c0 4.206 4.336 8.8 7.972 11.914a4.435 4.435 0 005.8 0c3.636-3.114 7.972-7.708 7.972-11.914a6.239 6.239 0 00-5.888-6.521zM12.6 18.937a2.651 2.651 0 01-3.47 0c-4.654-3.988-7.324-7.813-7.324-10.5a4.408 4.408 0 014.082-4.67 4.408 4.408 0 014.076 4.671.906.906 0 101.812 0 4.408 4.408 0 014.076-4.671 4.408 4.408 0 014.076 4.671c0 2.685-2.67 6.511-7.324 10.5z'
                            transform='translate(.005 -1.917)'
                            fill='#004236'
                          ></path>
                        </svg>
                      </div>
                      <p class="pl-3 font-['WorkSons'] font-medium text-primary text-lg">
                        Wish List
                      </p>
                    </div>
                  </li>
                  <li class='bg-white hover:bg-gray-100 py-1 pl-3 cursor-pointer' onClick={() => setActiveComponent("Pointsandrewords")}>
                    <div class='flex justify-start items-center py-2 pl-2 text-primary'>
                      <div class='w-8 h-8'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='21.699'
                          height='20.72'
                          viewBox='0 0 21.699 20.72'
                        >
                          <path
                            data-name='star (2)'
                            d='M10.85.85l3.09 6.26 6.91 1.01-5 4.87 1.18 6.88-6.18-3.25-6.18 3.25 1.18-6.88-5-4.87 6.91-1.01z'
                            fill='none'
                            stroke='#004236'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='1.7'
                          ></path>
                        </svg>
                      </div>
                      <p class="pl-3 font-['WorkSons'] font-medium text-primary text-lg">
                        Points &amp; rewards
                      </p>
                    </div>
                  </li>
                  <li class='bg-white hover:bg-gray-100 py-1 pl-3 cursor-pointer' onClick={() => setActiveComponent("MyOrders")}>
                    <div class='flex justify-start items-center py-2 pl-2 text-primary'>
                      <div class='w-8 h-8'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                        >
                          <path
                            d='M12 2a10 10 0 00-6.88 2.77V3a1 1 0 10-2 0v4.5a1 1 0 001 1h4.5a1 1 0 000-2h-2.4A8 8 0 114 12a1 1 0 10-2 0A10 10 0 1012 2zm0 6a1 1 0 00-1 1v3a1 1 0 001 1h2a1 1 0 000-2h-1V9a1 1 0 00-1-1z'
                            transform='translate(-2 -2)'
                            fill='#004236'
                          ></path>
                        </svg>
                      </div>
                      <p class="pl-3 font-['WorkSons'] font-medium text-primary text-lg">
                        Orders
                      </p>
                    </div>
                  </li>
                  <li class='bg-white hover:bg-gray-100 py-1 pl-3 cursor-pointer' onClick={() => setActiveComponent("SavedAddress")}>
                    <div class='flex justify-start items-center py-2 pl-2 text-primary'>
                      <div class='w-8 h-8'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='20'
                          height='22'
                          viewBox='0 0 20 22'
                        >
                          <g
                            fill='none'
                            stroke='#004236'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                          >
                            <path
                              data-name='Path 2895'
                              d='M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z'
                              transform='translate(-2 -1)'
                            ></path>
                            <path
                              data-name='Path 2896'
                              d='M9 22V12h6v10'
                              transform='translate(-2 -1)'
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <p class="pl-3 font-['WorkSons'] font-medium text-primary text-lg">
                        Saved Addresses
                      </p>
                    </div>
                  </li>
                  <li class='bg-white hover:bg-gray-100 py-1 pl-3 cursor-pointer' onClick={() => setActiveComponent("SaveCards")}>
                    <div class='flex justify-start items-center py-2 pl-2 text-primary'>
                      <div class='w-8 h-8'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='18'
                          viewBox='0 0 24 18'
                        >
                          <g
                            data-name='01 align center'
                            transform='translate(0 -3)'
                            fill='#004236'
                          >
                            <circle
                              data-name='Ellipse 6'
                              cx='1.5'
                              cy='1.5'
                              r='1.5'
                              transform='translate(4 14)'
                            ></circle>
                            <path
                              data-name='Path 2897'
                              d='M21 3H3a3 3 0 00-3 3v15h24V6a3 3 0 00-3-3zM3 5h18a1 1 0 011 1v2H2V6a1 1 0 011-1zM2 19v-9h20v9z'
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <p class="pl-3 font-['WorkSons'] font-medium text-primary text-lg">
                        Saved Cards
                      </p>
                    </div>
                  </li>
                </ul>
                <ul class='bg-white mt-6'>
                  <li class='bg-white hover:bg-gray-100 py-1 pl-3 cursor-pointer'>
                    <div class='flex justify-start items-center py-2 pl-2 text-primary'>
                      <div class='w-8 h-8'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='20'
                          viewBox='0 0 16 20'
                        >
                          <path
                            d='M4 12a1 1 0 001 1h7.59l-2.3 2.29a1 1 0 101.42 1.42l4-4a1.034 1.034 0 000-1.42l-4-4a1 1 0 00-1.42 1.42l2.3 2.29H5a1 1 0 00-1 1zM17 2H7a3 3 0 00-3 3v3a1 1 0 002 0V5a1 1 0 011-1h10a1 1 0 011 1v14a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-2 0v3a3 3 0 003 3h10a3 3 0 003-3V5a3 3 0 00-3-3z'
                            transform='translate(-4 -2)'
                            fill='#004236'
                          ></path>
                        </svg>
                      </div>
                      <p class="pl-3 font-['WorkSons'] font-medium text-primary text-lg">
                        Sign-out
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class='lg:pl-16 w-full lg:w-[75%] text-[#004236]'>
              {renderComponent()}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MyAccount
