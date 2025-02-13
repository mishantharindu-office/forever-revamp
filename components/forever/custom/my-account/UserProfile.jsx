import React from 'react'

function UserProfile() {
    return (
        <div className=''>
            <div class='group lg:hidden flex hover:bg-primary mb-4 px-3 py-2 border border-primary rounded-sm w-fit cursor-pointer'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    aria-hidden='true'
                    class='group-hover:text-white h-6 text-slate-800'
                >
                    <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M4 6h16M4 12h16M4 18h16'
                    ></path>
                </svg>
            </div>
            <div class='pb-2'>
                <h2 class="font-['Recoleta'] font-bold text-primary text-4xl uppercase">
                    My Account
                </h2>
            </div>
            <div class='py-2 pl-2'>
                <p class="font-['WorkSons'] font-medium text-primary text-sm uppercase">
                    Profile Details
                </p>
            </div>
            <div>
                <div class='bg-white w-full'>
                    <div class='px-4 py-5 w-full'>
                        <div class='flex justify-start items-center'>
                            <p class="m-0 p-0 font-['WorkSons'] font-bold text-primary text-base">
                                Name :
                            </p>
                            <p class="m-0 p-0 pl-3 font-['WorkSons'] font-medium text-primary text-base">
                                Mishan Tharindu null
                            </p>
                        </div>
                        <div class='flex justify-start items-center'>
                            <p class="m-0 p-0 font-['WorkSons'] font-bold text-primary text-base">
                                Email :
                            </p>
                            <p class="m-0 p-0 pl-3 font-['WorkSons'] font-medium text-primary text-base">
                                mishantharindu.abacuslk@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
                <div class='flex justify-end items-center mt-4'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='2'
                        stroke='currentColor'
                        aria-hidden='true'
                        class='pr-1 w-5 h-5 text-primary'
                    >
                        <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                        ></path>
                    </svg>
                    <p class='font-bold text-primary text-base'>Edit Profile</p>
                </div>
                <div class='mt-4 py-1 pl-2'>
                    <p class="font-['WorkSons'] font-medium text-primary text-sm uppercase">
                        Recently added to the wish list
                    </p>
                </div>
                <div class='bg-white w-full'>
                    <div class='bg-white p-6'></div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile