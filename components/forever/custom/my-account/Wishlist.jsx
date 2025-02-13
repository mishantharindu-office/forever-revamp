import React, { useState } from 'react'

const Wishlist = () => {
  const [expandedCategories, setExpandedCategories] = useState({})
  const [showCreateWishlist, setShowCreateWishlist] = useState(false)

  // Wishlist Data
  const wishlistItems = [
    {
      id: 1,
      category: 'Face',
      name: 'Tiki Baby Cream',
      price: 'Rs.150',
      size: '50ml',
      addedDate: '11 February 2025',
      image:
        'https://4everstorages.s3.amazonaws.com/products/70-Tiki-Baby-Cream.png'
    },
    {
      id: 2,
      category: 'Baby',
      name: 'Tiki Baby Lunuwila Soap',
      price: 'Rs.155',
      size: '75g',
      addedDate: '11 February 2025',
      image:
        'https://4everstorages.s3.amazonaws.com/products/76-Gentle-Baby-Soap-Lunuwila.png'
    }
  ]

  // Toggle Category Expansion
  const toggleCategory = category => {
    setExpandedCategories(prevState => ({
      ...prevState,
      [category]: !prevState[category]
    }))
  }

  return (
    <div className='lg:pl-16 w-full lg:w-[75%]'>
      {/* Wishlist Title */}
      <div className='pb-2'>
        <h2 className="font-['Recoleta'] font-bold text-primary text-4xl uppercase">
          Your Wish List
        </h2>
      </div>
      <hr className='divide-primary' />

      {/* Wishlist Categories & Items */}
      <div className='mt-5'>
        {['Face', 'Baby'].map(category => (
          <div key={category} className='bg-white pb-2'>
            {/* Category Header */}
            <div
              className='flex justify-between items-center bg-white mt-5 px-4 py-4 border-b cursor-pointer'
              onClick={() => toggleCategory(category)}
            >
              <p className="m-0 p-0 font-['WorkSons'] font-bold text-subtext text-base uppercase">
                {category}
              </p>
              <div className='flex justify-center items-center gap-2'>
                {expandedCategories[category] ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    className='w-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5 15l7-7 7 7'
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    className='w-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19 9l-7 7-7-7'
                    ></path>
                  </svg>
                )}
              </div>
            </div>

            {/* Wishlist Actions - Only Show When Expanded */}
            {expandedCategories[category] && (
              <>
                <div className='flex justify-between bg-white lg:px-6 py-4'>
                  <button className="flex items-center gap-2 bg-primary hover:bg-slate-900 px-4 lg:px-8 py-2 lg:py-3 border-none font-['WorkSons'] text-white text-xs lg:text-sm">
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='2'
                      stroke='currentColor'
                      className='w-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                      ></path>
                    </svg>
                    Add All To Bag
                  </button>
                  <button className="bg-red-500 hover:bg-slate-900 px-4 lg:px-8 py-2 lg:py-3 border-none font-['WorkSons'] text-white text-xs lg:text-sm">
                    Delete List
                  </button>
                </div>

                {/* Wishlist Items */}
                <p className="px-4 py-2 font-['WorkSons'] text-primary text-base">
                  (
                  {
                    wishlistItems.filter(item => item.category === category)
                      .length
                  }
                  ) Items in your wish list
                </p>

                {wishlistItems
                  .filter(item => item.category === category)
                  .map(item => (
                    <div
                      key={item.id}
                      className='flex justify-start items-start md:items-center bg-gray-100 shadow-sm mx-4 my-2 p-4 rounded-none'
                    >
                      {/* Product Image */}
                      <div className='min-w-[115px]'>
                        <img
                          src={item.image}
                          alt={item.name}
                          className='rounded-md w-[100px] h-[110px] object-cover'
                        />
                      </div>

                      {/* Product Details */}
                      <div className='flex md:flex-row flex-col w-full'>
                        <div className='md:pl-4 w-full md:w-1/3'>
                          <p className="m-0 p-0 font-['Recoleta'] font-bold text-primary text-base uppercase cursor-pointer">
                            {item.name}
                          </p>
                          {/* Star Rating */}
                          <div className='flex items-center mt-1'>
                            {[...Array(5)].map((_, index) => (
                              <svg
                                key={index}
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 576 512'
                                className='w-4 h-4 text-primary'
                              >
                                <path d='M287.9 0c9.2 0 17.6 5.25 21.6 13.52L378.1 154.8l153.3 22.7c9 1.3 16.4 7.6 19.3 16.3 2.8 8.7.5 18.2-6 24.5L433.6 328.4l26.3 155.5c1.5 9-2.2 18.2-9.7 23.5-7.4 5.3-18.1 6-25.3 1.7l-137-72.3-137 72.3c-7.2 4.3-17.9 3.6-25.3-1.7-7.5-5.3-11.2-14.5-9.7-23.5L142.2 328.4 31.1 218.2c-6.5-6.3-8.8-15.8-6-24.5 2.9-8.7 10.3-15 19.3-16.3l153.3-22.7 66.6-141.3C270.3 5.25 278.7 0 287.9 0z'></path>
                              </svg>
                            ))}
                          </div>
                          <p className="m-0 mt-1 p-0 font-['WorkSons'] text-primary text-sm">
                            {item.size}
                          </p>
                          <p className="m-0 my-2 p-0 font-['WorkSons'] font-bold text-primary text-base">
                            {item.price}
                          </p>
                        </div>

                        <div className='flex flex-col justify-between w-full'>
                          <div className='hidden md:flex md:flex-row flex-col justify-end'>
                            <p className="m-0 mt-2 mr-3 p-0 font-['WorkSons'] text-slate-600 text-sm">
                              Added on {item.addedDate}
                            </p>
                            <div className='group flex justify-end items-center text-red-500 cursor-pointer'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='2'
                                stroke='currentColor'
                                className='w-5 h-5'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                                ></path>
                              </svg>
                              <p className="pl-1 font-['WorkSons'] hover:underline">
                                Remove
                              </p>
                            </div>
                          </div>

                          <p className="m-0 my-3 p-0 font-['WorkSons'] font-bold text-primary text-base text-end uppercase">
                            Quantity: 1
                          </p>
                          <div className='flex justify-end'>
                            <button className="bg-primary hover:bg-slate-900 px-8 py-3 border-none w-[35%] font-['WorkSons'] text-white text-sm">
                              Add To Bag
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wishlist
