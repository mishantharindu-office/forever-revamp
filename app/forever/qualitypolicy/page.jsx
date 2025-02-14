// components/QualityPolicy.js
import React from 'react'
import Image from 'next/image'

const QualityPolicy = () => {
  return (
    <div className='py-10 w-full h-full'>
      <div className='relative bg-mint mx-auto w-1/2 text-mint'>
        <Image
          src='/assets/image/QualityPolicy.png'
          alt='Face Care'
          // layout='fill'
          // objectFit='contain'
          width={1000}
          height={720}
          className='w-full'
        />
      </div>


      

    </div>
  )
}

export default QualityPolicy
