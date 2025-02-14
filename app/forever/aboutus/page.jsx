'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function AboutUs () {
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
    <div className='bg-gray-50'>
      {/* Header Section */}
      <div className='bg-lavender h-screen sm:h-[560px]'>
        <div className='flex justify-start items-start px-[30px] sm:px-[130px] pt-10 pl-10'>
          <p className="font-['WorkSons'] hover:font-bold text-breadcrumb text-sm cursor-pointer">
            Home
          </p>
          <p className="font-['WorkSons'] text-breadcrumb text-sm">
            / About Us
          </p>
        </div>
        <div className='flex justify-center items-center pb-10 h-full'>
          <h1 className="font-['recoleta'] font-bold text-primary text-5xl uppercase">
            About Us
          </h1>
        </div>
      </div>

      {/* Story Section */}
      <div className='grid grid-cols-1 lg:grid-cols-2 bg-primary pb-4 lg:pb-0 w-full h-screen'>
        <div className='flex justify-center items-center px-[30px] sm:px-[130px] py-8'>
          <div>
            <h2 className='py-4 font-bold text-white text-4xl text-start tracking-wider'>
              THE STORY OF 4EVER
            </h2>
            <p className='text-white text-sm text-start leading-7'>
              Chandhani Bandara was born in Matale and was the youngest daughter
              of an Ayurvedic family. Her father was an Avuredic doctor and
              Chandhani had the privilege of being at her father’s side even
              when he treated patients. As a result, Chandhani got the exposure
              about the healing power of herbs and Ayurvedic medicine. Her quest
              for knowledge in the field, motivated to study deeply about the
              use of herbal compounds for the wellbeing of people. Being a
              well-qualified graduate Chandhani joined reputed private
              organizations as a chemist where she gained knowledge, she never
              hesitated to take risks and ultimately brought a whole new
              dimension for the use of Ayurvedic medicine. Her vision was to use
              the healing abilities of herbs to magnify the beauty of people.
              With her passionate disposition and relentless drive to pursue
              what she believes in and the commitment made Chandhani Bandara to
              start 4Ever Skin Naturals. But today, she is a proud achievement
              of her dreams and is regarded as one of the most successful woman
              entrepreneurs in Sri Lanka.
            </p>
          </div>
        </div>
        <div className='my-auto lg:p-0 px-[30px] sm:px-[130px] py-4 h-screen overflow-hidden'>
          <Image
            alt='4ever Story'
            src='/assets/image/4everstory.png'
            width={1920}
            height={1080}
            className='w-full h-full object-cover'
          />
        </div>
      </div>

      {/* Founder Section */}
      <div className='bg-secondary py-10 sm:py-0 w-full h-full'>
        <div className='flex lg:flex-row flex-col items-center px-[30px] sm:px-[130px] py-10'>
          {/* Text Section */}
          <div className='pr-0 lg:pr-16'>
            <h2 className='mb-5 font-bold text-primary text-4xl text-start tracking-wider'>
              FOUNDER’S NOTE
            </h2>
            <p className='pb-5 text-primary text-sm text-start leading-7'>
              “4EVER”, one of the best in the world when it comes to herbal
              beauty products, uses 100% natural active herbals in all the
              products like Extracts of Gotukola, White Sandalwood, licorice,
              Aloe Vera, Venivel, Margosa, Cuscus (Savendara) which were used in
              ayurveda over thousands of years for beautification and longevity.
              With a very good vintage for innovations in the company which by
              creating the finest products in all categories, has revived the
              product offering and driven the market forward. It is the
              superlative quality and performance of our products that enables
              us to attract and win ever-growing numbers of consumers, and
              ensure their loyalty towards the products. Enjoy the wide array of
              product manufactured for all Skin Types for both men &amp; women.
            </p>
          </div>

          {/* Image & Founder Details */}
          <div className='flex justify-center items-center h-auto lg:h-screen'>
            <div>
              <div className='relative w-[345px] h-[400px] overflow-hidden'>
                <Image
                  src='/assets/image/Chandani-Bandara.jpeg'
                  alt='Chandani Bandara'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <h4 className='my-1 mt-5 pb-1 font-bold text-primary text-3xl text-center tracking-wider'>
                Chandhani Bandara
              </h4>
              <p className='text-primary text-base text-center'>
                Founder and Chairperson <br /> 4ever Skin Naturals
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cetification Section */}
      <div className='bg-primary py-10 sm:py-0 w-full h-full'>
        {/* OUR CERTIFICATIONS */}
        <div className='flex sm:flex-row flex-col items-center px-[30px] sm:px-[130px]'>
          <div className='w-full sm:w-2/3'>
            <h2 className="pb-5 sm:pb-0 font-['Druk'] font-bold text-white text-4xl text-center sm:text-start tracking-wider">
              OUR CERTIFICATIONS
            </h2>
          </div>
          <div className='bg-lavender p-5 border border-primary border-opacity-25 w-full sm:w-1/3 min-h-[310px]'>
            <h4 className="m-0 p-0 font-['Recoleta'] font-bold text-primary text-4xl text-left">
              ISO 9001: 2015
            </h4>
            <p className="m-0 p-0 font-['WorkSons'] text-primary text-base text-left">
              Quality Management System Certification
            </p>
            <div className='flex justify-center items-center mt-12 h-full'>
              <div className='relative w-36 h-36'>
                <Image
                  src='/assets/image/certificate/SGS_ISO_9001_UKAS_2014_TCL_HR-1.png'
                  alt='ISO 9001: 2015 Certificate'
                  layout='fill'
                  objectFit='fill'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Row 2 */}
        <div className='flex sm:flex-row flex-col items-center px-[30px] sm:px-[130px]'>
          <div className='bg-lavender p-5 border border-primary border-opacity-25 w-full sm:w-1/3 min-h-[310px]'>
            <h4 className="m-0 p-0 font-['Recoleta'] font-bold text-primary text-4xl text-left">
              Cosmetic GMP (ISO 22716)
            </h4>
            <p className='m-0 p-0 text-primary text-base text-left'>
              Good Manufacturing Practice Certification
            </p>
            <div className='flex justify-center items-center mt-12 h-full'>
              <div className='relative w-36 h-36'>
                <Image
                  src='/assets/image/certificate/gmp-1.png'
                  alt='Cosmetic GMP (ISO 22716) Certificate'
                  layout='fill'
                  objectFit='fill'
                />
              </div>
            </div>
          </div>
          <div className='bg-lavender p-5 border border-primary border-opacity-25 w-full sm:w-1/3 min-h-[310px]'>
            <h4 className="m-0 p-0 font-['Recoleta'] font-bold text-primary text-4xl text-left">
              HACCP
            </h4>
            <p className='m-0 p-0 text-primary text-base text-left'>
              Hazard Analysis and Critical Control Points
            </p>
            <div className='flex justify-center items-center mt-12 h-full'>
              <div className='relative w-36 h-36'>
                <Image
                  src='/assets/image/certificate/haccp.jpeg'
                  alt='HACCP Certificate'
                  layout='fill'
                  objectFit='fill'
                />
              </div>
            </div>
          </div>
          <div className='bg-lavender p-5 border border-primary border-opacity-25 w-full sm:w-1/3 min-h-[310px]'>
            <h4 className="m-0 p-0 font-['Recoleta'] font-bold text-primary text-4xl text-left">
              Surya Singha
            </h4>
            <p className='m-0 p-0 text-primary text-base text-left'>
              Good Manufacturing Practice Certification
            </p>
            <div className='flex justify-center items-center mt-12 h-full'>
              <div className='relative w-36 h-36'>
                <Image
                  src='/assets/image/certificate/Suriyasinha.jpeg'
                  alt='Surya Singha Certificate'
                  layout='fill'
                  objectFit='fill'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Row 3 */}
        <div className='flex sm:flex-row flex-col items-center px-[30px] sm:px-[130px]'>
          <div className='bg-lavender p-5 border border-primary border-opacity-25 w-full sm:w-1/3 min-h-[310px]'>
            <h4 className="m-0 p-0 font-['Recoleta'] font-bold text-primary text-4xl text-left">
              HALAL
            </h4>
            <p className='m-0 p-0 text-primary text-base text-left'>
              HALAL Certification
            </p>
            <div className='flex justify-center items-center mt-12 h-full'>
              <div className='relative w-36 h-36'>
                <Image
                  src='/assets/image/certificate/HAC.jpeg'
                  alt='HALAL Certificate'
                  layout='fill'
                  objectFit='fill'
                />
              </div>
            </div>
          </div>
        </div>

        {/* OUR AWARDS */}
        <div className='px-[30px] sm:px-[130px] py-10 w-full'>
          <h2 className='mb-5 pb-5 sm:pb-0 font-bold text-white text-4xl text-center sm:text-start tracking-wider'>
            OUR AWARDS
          </h2>
          <p className='text-white text-sm leading-7'>
            The SLIM Brand Excellence Awards is a celebration of brand
            excellence at national level and rewards the outstanding efforts of
            outstanding marketers.
          </p>
        </div>

        {/* Awards Grid */}
        <div className='gap-4 sm:gap-2 grid grid-cols-2 sm:grid-cols-4 px-[30px] sm:px-[130px] py-10 pr-0 sm:pr-10 w-full'>
          <div>
            <h2 className="m-0 p-0 font-['Recoleta'] font-bold text-subtext text-base text-center sm:text-start tracking-wider">
              2015
            </h2>
            <h2 className="m-0 p-0 font-['Recoleta'] font-bold text-subtext text-4xl text-center sm:text-start tracking-wider">
              Silver Award
            </h2>
            <p className="m-0 p-0 pt-2 font-['WorkSons'] text-white text-base sm:text-left text-center">
              Innovative Brand of the Year
            </p>
          </div>
          <div>
            <h2 className="m-0 p-0 font-['Recoleta'] font-bold text-subtext text-base text-center sm:text-start tracking-wider">
              2014
            </h2>
            <h2 className="m-0 p-0 font-['Recoleta'] font-bold text-subtext text-4xl text-center sm:text-start tracking-wider">
              Bronze Award
            </h2>
            <p className="m-0 p-0 pt-2 font-['WorkSons'] text-white text-base sm:text-left text-center">
              Brand of the year for the SME
            </p>
          </div>
        </div>

        {/* Other Awards */}
        <div className='px-[30px] sm:px-[130px] py-10 w-full'>
          <h2 className='pb-5 sm:pb-0 font-bold text-white text-4xl text-center sm:text-start tracking-wider'>
            Other Awards
          </h2>
          <div className='flex space-x-5 mt-10 overflow-x-scroll'>
            {/* Award 1 */}
            <div className='flex flex-col justify-start items-center pb-5'>
              <div className='relative bg-white w-[345px] h-[403px]'>
                <Image
                  src='/assets/image/award/MPE.jpeg'
                  alt='Most Promising Entrepreneurship Award'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <h2 className='my-2 pb-5 sm:pb-0 font-bold text-white text-3xl text-center tracking-wide'>
                Most Promising Entrepreneurship
              </h2>
              <p className='text-white text-base text-center'>Award 2014</p>
            </div>
            {/* Award 2 */}
            <div className='flex flex-col justify-start items-center pb-5'>
              <div className='relative bg-white w-[345px] h-[403px]'>
                <Image
                  src='/assets/image/award/WE.jpeg'
                  alt='Woman Entrepreneur Award'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <h2 className="my-2 pb-5 sm:pb-0 font-['Druk'] font-bold text-white text-3xl text-center tracking-wide">
                Woman Entrepreneur
              </h2>
              <p className='text-white text-sm text-center'>of the year 2011</p>
            </div>
            {/* Award 3 */}
            <div className='flex flex-col justify-start items-center pb-5'>
              <div className='relative bg-white w-[345px] h-[403px]'>
                <Image
                  src='/assets/image/award/Star Award 2012.png'
                  alt='Star Award 2012'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <h2 className='my-2 pb-5 sm:pb-0 font-bold text-white text-3xl text-center tracking-wide'>
                Star Award 2012
              </h2>
              <p className='text-white text-sm text-center'>
                Best Performing Entrepreneur Central Province
              </p>
            </div>
            {/* Award 4 */}
            <div className='flex flex-col justify-start items-center pb-5'>
              <div className='relative bg-white w-[345px] h-[403px]'>
                <Image
                  src='/assets/image/award/InternationalBusinessExcellenceAwardWinner- 2016.png'
                  alt='International Business Excellence Award Winner 2016'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <h2 className='my-2 pb-5 sm:pb-0 font-bold text-white text-3xl text-center tracking-wide'>
                International Business Excellence Awards
              </h2>
              <p className='text-white text-sm text-center'>YEAR 2016</p>
            </div>
            {/* Award 5 */}
            <div className='flex flex-col justify-start items-center pb-5'>
              <div className='relative bg-white w-[345px] h-[403px]'>
                <Image
                  src='/assets/image/award/13th SLIM Brand .png'
                  alt='13th SLIM Brand Excellence Award'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <h2 className='my-2 pb-5 sm:pb-0 font-bold text-white text-3xl text-center tracking-wide'>
                SLIM Brand Excellence Awards
              </h2>
              <p className='text-white text-sm text-center'>YEAR 2015</p>
            </div>
            {/* Award 6 */}
            <div className='flex flex-col justify-start items-center pb-5'>
              <div className='relative bg-white w-[345px] h-[403px]'>
                <Image
                  src='/assets/image/award/14th SLIM Brand.png'
                  alt='14th SLIM Brand Excellence Award'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <h2 className='my-2 pb-5 sm:pb-0 font-bold text-white text-3xl text-center tracking-wide'>
                SLIM Brand Excellence Awards
              </h2>
              <p className='text-white text-sm text-center'>YEAR 2014</p>
            </div>
            {/* Award 7 */}
            <div className='flex flex-col justify-start items-center pb-5'>
              <div className='relative bg-white w-[345px] h-[403px]'>
                <Image
                  src='/assets/image/award/Star Award 2011 .png'
                  alt='STAR awards in 2012'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <h2 className='my-2 pb-5 sm:pb-0 font-bold text-white text-3xl text-center tracking-wide'>
                STAR awards in 2012
              </h2>
              <p className='text-white text-sm text-center'>YEAR 2012</p>
            </div>
          </div>
        </div>
      </div>

      {/* OUR INGREDIENTS Section */}

      <div className='grid grid-cols-1 sm:grid-cols-2 bg-lavender w-full h-screen'>
        {/* Left Content */}
        <div className='flex items-center px-[30px] sm:px-[130px]'>
          <div>
            <h2 className='my-5 font-bold text-primary text-4xl text-start tracking-wider'>
              OUR INGREDIENTS
            </h2>
            <p className='mb-5 text-primary text-base text-start'>
              Why are we unique? 4ever uses botanical extracts from 100% natural
              authentic herbs to give you the most effective and safest
              solutions for all your skin and hair problems.
            </p>
            <div className="inline-block bg-primary hover:bg-emerald-700 px-5 py-2 font-['WorkSons'] text-white cursor-pointer">
              Read More
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className='relative overflow-hidden'>
          <Image
            src='/assets/image/Turmeric.png'
            alt='Turmeric Ingredient'
            layout='fill'
            objectFit='cover'
            sizes='100vw'
          />
        </div>
      </div>

      {/* Blog Section */}
      <div className='bg-primary px-[30px] sm:px-[130px] py-20 w-full'>
        <h2 className='pb-5 sm:pb-0 font-bold text-white text-4xl text-center sm:text-start tracking-wider'>
          GIVING BACK TO THE SOCIETY
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 mt-10'>
          {/* Post 1 */}
          <div className='flex-col justify-center items-center cursor-pointer'>
            <div className='flex justify-center items-center'>
              <div className='relative w-[345px] h-[403px]'>
                <Image
                  src='/assets/image/02.jpeg'
                  alt="Tiki Baby World Children's Day Celebration - 2019"
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
            <h2 className='my-4 pb-5 lg:pb-0 font-bold text-white text-3xl text-center tracking-wide'>
              Tiki Baby World Children's Day Celebration - 2019
            </h2>
          </div>
          {/* Post 2 */}
          <div className='flex-col justify-center items-center cursor-pointer'>
            <div className='flex justify-center items-center'>
              <div className='relative w-[345px] h-[403px]'>
                <Image
                  src='/assets/image/01.jpeg'
                  alt='Tiki Baby 1st Birthday Celebration'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
            <h2 className='my-4 pb-5 lg:pb-0 font-bold text-white text-3xl text-center tracking-wide'>
              Tiki Baby 1st Birthday Celebration
            </h2>
          </div>
          {/* Post 3 */}
          <div className='flex-col justify-center items-center cursor-pointer'>
            <div className='flex justify-center items-center'>
              <div className='relative w-[345px] h-[403px]'>
                <Image
                  src='/assets/image/03.jpeg'
                  alt='Tesaththa Pujawa'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
            <h2 className='pb-5 lg:pb-0 font-bold text-white text-3xl text-center tracking-wide'>
              Tesaththa Pujawa
            </h2>
          </div>
        </div>
        <div className='flex justify-center items-center mt-10'>
          <button className="flex justify-center items-center hover:bg-slate-900 px-28 py-2 border-2 border-white font-['WorkSons'] text-white hover:text-white text-2xl transition-all duration-100">
            View more
          </button>
        </div>
      </div>

      {/* Location Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 bg-lavender w-full h-fit sm:h-screen'>
        {/* Left Column: Details & Dropdown */}
        <div className='flex items-center px-[30px] sm:px-[130px] py-10'>
          <div>
            <h2 className="mb-2 sm:mb-5 font-bold text-primary text-4xl text-start tracking-wider">
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
                    <p className="absolute p-0 w-full text-base text-left">
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
                      className="py-1 font-medium text-primary text-sm"
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
                <p className="m-0 mb-1 text-primary text-base text-start">
                  {officeAddress}
                </p>
                <p className="m-0 mb-1 text-primary text-base text-start">
                  +94 112 02 6868
                </p>
                <p className="m-0 mb-1 text-primary text-base text-start">
                  info@4everskinnaturals.com
                </p>
              </>
            ) : (
              <p className="m-0 mb-1 text-primary text-base text-start">
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
    </div>
  )
}
