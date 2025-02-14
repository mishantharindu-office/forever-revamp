import React from 'react'

export default function ShippingDetails () {
  return (
    <>
      <div class='bg-gray-50'>
        <div class='bg-lavender h-screen sm:h-[560px]'>
          <div class='px-[30px] sm:px-[130px] pt-10 pl-10'>
            <p class="font-['WorkSons'] text-bredcrumb text-sm">
              Home / Shipping Information
            </p>
          </div>
          <div class='flex justify-center items-center pb-10 h-full'>
            <h1 class="font-['recoleta'] font-bold text-primary text-5xl uppercase">
              Shipping Information
            </h1>
          </div>
        </div>
      </div>
      <div class='bg-lavender px-[30px] sm:px-[130px] pt-10 pb-16 pl-10 min-h-screen'>
        <ol>
          <li>
            <h3 class="pt-10 font-['recoleta'] font-bold text-primary text-2xl uppercase">
              How the products will be delivered
            </h3>
            <ul>
              <li>Standard delivery: ship within 2-3 working days</li>
              <li>Express Delivery: within 24 hours</li>
            </ul>
          </li>
          <li>
            <h3 class="pt-10 font-['recoleta'] font-bold text-primary text-2xl uppercase">
              Courier charges
            </h3>
            <ul>
              <li>Colombo 1 to 15: 250/= (1kg or below)</li>
              <li>Colombo Suburbs: 300/= (1kg or below)</li>
              <li>Outstation: 350/= (1kg or below)</li>
              <li>North and East: 400/= (1kg or below)</li>
              <li>Additional kg: 50/= (more than 1kg)</li>
              <li>3% over: 5000/=</li>
              <li>Express delivery: will depend with the location</li>
            </ul>
          </li>
          <li>
            <h3 class="pt-10 font-['recoleta'] font-bold text-primary text-2xl uppercase">
              Delivery time
            </h3>
            <p>Within 2-3 days (Working Days)</p>
          </li>
          <li>
            <h3 class="pt-10 font-['recoleta'] font-bold text-primary text-2xl uppercase">
              Scheduled delivery information
            </h3>
            <p>Customer should add the delivery date</p>
          </li>
        </ol>
      </div>
    </>
  )
}
