import React from 'react'

function DontMiss() {
    return (
        <>
            <section className='bg-[#004236] p-10 w-full'>

                <div className='mx-auto container'>
                    <h2 className='font-bold text-4xl text-center text-white'>You Don't Want to Miss These...</h2>
                </div>

                <div className='gap-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto container'>

                    {/* Column 01 */}
                    <div className='py-14'>
                        <img className='pb-5' src='image/banner-50.jpg' />
                        <div className='text-center text-white'>
                            <h3 className='mb-2 font-bold text-2xl leading-normal'>Keratin Care Shampoo & Conditioner</h3>
                            <p className='mb-5'>Hydrolyzed Keratin Protein, Pro-vitamin B5 & Avocado Extract offers you a strong, healthy looking & shiny manageable hair for easy styling.</p>
                            <button className='border-[1px] border-white bg-[#ddde04] hover:bg-[#facc15] mb-5 px-10 py-[8px] text-[#004236] text-sm'>Shop Now</button>
                        </div>

                    </div>
                    {/* Column 02 */}
                    <div className='py-14'>
                        <img className='pb-5' src='image/banner-50.jpg' />
                        <div className='text-center text-white'>
                            <h3 className='mb-2 font-bold text-2xl leading-normal'>Keratin Care Shampoo & Conditioner</h3>
                            <p className='mb-5'>Hydrolyzed Keratin Protein, Pro-vitamin B5 & Avocado Extract offers you a strong, healthy looking & shiny manageable hair for easy styling.</p>
                            <button className='border-[1px] border-white bg-[#ddde04] hover:bg-[#facc15] mb-5 px-10 py-[8px] text-[#004236] text-sm'>Shop Now</button>
                        </div>

                    </div>
                    {/* Column 03 */}
                    <div className='py-14'>
                        <img className='pb-5' src='image/banner-50.jpg' />
                        <div className='text-center text-white'>
                            <h3 className='mb-2 font-bold text-2xl leading-normal'>Keratin Care Shampoo & Conditioner</h3>
                            <p className='mb-5'>Hydrolyzed Keratin Protein, Pro-vitamin B5 & Avocado Extract offers you a strong, healthy looking & shiny manageable hair for easy styling.</p>
                            <button className='border-[1px] border-white bg-[#ddde04] hover:bg-[#facc15] mb-5 px-10 py-[8px] text-[#004236] text-sm'>Shop Now</button>
                        </div>

                    </div>
                    {/* Column 04 */}
                    <div className='py-14'>
                        <img className='pb-5' src='image/banner-50.jpg' />
                        <div className='text-center text-white'>
                            <h3 className='mb-2 font-bold text-2xl leading-normal'>Keratin Care Shampoo & Conditioner</h3>
                            <p className='mb-5'>Hydrolyzed Keratin Protein, Pro-vitamin B5 & Avocado Extract offers you a strong, healthy looking & shiny manageable hair for easy styling.</p>
                            <button className='border-[1px] border-white bg-[#ddde04] hover:bg-[#facc15] mb-5 px-10 py-[8px] text-[#004236] text-sm'>Shop Now</button>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default DontMiss