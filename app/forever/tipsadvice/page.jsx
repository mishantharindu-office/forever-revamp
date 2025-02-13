import Image from 'next/image'

const TipsAdvice = () => {
  return (
    <div className='bg-gray-50'>
      {/* Header Section */}
      <div className='flex justify-center items-center bg-lavender px-[30px] sm:px-[130px] pb-10 h-screen sm:h-[560px]'>
        <div>
          <h1 className='font-bold text-primary text-5xl text-center uppercase'>
            TIPS & ADVICE
          </h1>
          <p className='text-primary text-base'>
            We will not only provide the best products for your personal care,
            but also help you with small tips and advice to maintain a healthy
            skin and hair.
          </p>
        </div>
      </div>

      {/* Face Care Tips Section */}
      <div className='justify-center grid grid-cols-1 bg-primary px-[30px] sm:px-[130px] py-10 w-full'>
        <h3 className='pb-4 font-semibold text-white text-4xl text-left uppercase tracking-widest'>
          Facecare Tips
        </h3>
        <div className='flex justify-start space-x-3 pb-4 overflow-x-scroll scrollbar-alt'>
          <div className='relative bg-mint w-[345px] min-w-[350px] h-[400px] text-mint'>
            <Image
              src='/assets/image/tips/face.png'
              alt='Face Care'
              layout='fill'
              objectFit='cover'
            />
            <div className='right-0 bottom-0 absolute flex flex-col justify-end items-start bg-black/50 px-6 pb-8 w-full h-full'>
              <p className='mb-5 text-white text-sm'>
                Do you know there are several types of acne that range from mild
                to severe?
              </p>
              <button className='flex justify-between items-center bg-primary hover:bg-subtext hover:bg-[#c4ac70] px-3 py-2 text-white'>
                <p className='pr-2 text-sm'>Watch Now</p>
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 512 512'
                >
                  <path d='M188.3 147.1C195.8 142.8 205.1 142.1 212.5 147.5L356.5 235.5C363.6 239.9 368 247.6 368 256C368 264.4 363.6 272.1 356.5 276.5L212.5 364.5C205.1 369 195.8 369.2 188.3 364.9C180.7 360.7 176 352.7 176 344V167.1C176 159.3 180.7 151.3 188.3 147.1V147.1zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Skincare Tips Section */}
      <div className='justify-center grid grid-cols-1 bg-lavender px-[30px] sm:px-[130px] py-10 w-full'>
        <h3 className='pb-4 font-semibold text-primary text-4xl text-left uppercase tracking-widest'>
          Skincare Tips
        </h3>
        <div className='flex justify-start space-x-3 pb-4 overflow-x-scroll scrollbar-alt'>
          <div className='relative bg-mint w-[345px] min-w-[350px] h-[400px] text-mint'>
            <Image
              src='/assets/image/tips/skin.png'
              alt='Skincare'
              layout='fill'
              objectFit='cover'
            />
            <div className='right-0 bottom-0 absolute flex flex-col justify-end items-start bg-black/50 px-6 pb-8 w-full h-full'>
              <p className='mb-5 text-white text-sm'>
                Following a high maintenance regime for face cleanup at home is
                difficult to stick with.
              </p>
              <button className='flex justify-between items-center bg-primary hover:bg-subtext hover:bg-[#c4ac70] px-3 py-2 text-white'>
                <p className='pr-2 text-sm'>Watch Now</p>
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 512 512'
                >
                  <path d='M188.3 147.1C195.8 142.8 205.1 142.1 212.5 147.5L356.5 235.5C363.6 239.9 368 247.6 368 256C368 264.4 363.6 272.1 356.5 276.5L212.5 364.5C205.1 369 195.8 369.2 188.3 364.9C180.7 360.7 176 352.7 176 344V167.1C176 159.3 180.7 151.3 188.3 147.1V147.1zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z' />
                </svg>
              </button>
            </div>
          </div>
          <div className='relative bg-mint w-[345px] min-w-[350px] h-[400px] text-mint'>
            <Image
              src='/assets/image/tips/skin.png'
              alt='Skincare'
              layout='fill'
              objectFit='cover'
            />
            <div className='right-0 bottom-0 absolute flex flex-col justify-end items-start bg-black/50 px-6 pb-8 w-full h-full'>
              <p className='mb-5 text-white text-sm'>
                Following a high maintenance regime for face cleanup at home is
                difficult to stick with.
              </p>
              <button className='flex justify-between items-center bg-primary hover:bg-subtext hover:bg-[#c4ac70] px-3 py-2 text-white'>
                <p className='pr-2 text-sm'>Watch Now</p>
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 512 512'
                >
                  <path d='M188.3 147.1C195.8 142.8 205.1 142.1 212.5 147.5L356.5 235.5C363.6 239.9 368 247.6 368 256C368 264.4 363.6 272.1 356.5 276.5L212.5 364.5C205.1 369 195.8 369.2 188.3 364.9C180.7 360.7 176 352.7 176 344V167.1C176 159.3 180.7 151.3 188.3 147.1V147.1zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Body Care Tips Section */}
      <div className='justify-center grid grid-cols-1 bg-primary px-[30px] sm:px-[130px] py-10 w-full'>
        <h3 className='pb-4 font-semibold text-white text-4xl text-left uppercase tracking-widest'>
          Body Care Tips
        </h3>
        <div className='flex justify-start space-x-3 pb-4 overflow-x-scroll scrollbar-alt'>
          <div className='relative bg-mint w-[345px] min-w-[350px] h-[400px] text-mint'>
            <Image
              src='/assets/image/tips/body.png'
              alt='Face Care'
              layout='fill'
              objectFit='cover'
            />
            <div className='right-0 bottom-0 absolute flex flex-col justify-end items-start bg-black/50 px-6 pb-8 w-full h-full'>
              <p className='mb-5 text-white text-sm'>
                The human body comprises around 60% water.
              </p>
              <button className='flex justify-between items-center bg-primary hover:bg-subtext hover:bg-[#c4ac70] px-3 py-2 text-white'>
                <p className='pr-2 text-sm'>Watch Now</p>
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 512 512'
                >
                  <path d='M188.3 147.1C195.8 142.8 205.1 142.1 212.5 147.5L356.5 235.5C363.6 239.9 368 247.6 368 256C368 264.4 363.6 272.1 356.5 276.5L212.5 364.5C205.1 369 195.8 369.2 188.3 364.9C180.7 360.7 176 352.7 176 344V167.1C176 159.3 180.7 151.3 188.3 147.1V147.1zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Haircare Tips Section */}
      <div className='justify-center grid grid-cols-1 bg-lavender px-[30px] sm:px-[130px] py-10 w-full'>
        <h3 className='pb-4 font-semibold text-primary text-4xl text-left uppercase tracking-widest'>
          Haircare Tips
        </h3>
        <div className='flex justify-start space-x-3 pb-4 overflow-x-scroll scrollbar-alt'>
          <div className='relative bg-mint w-[345px] min-w-[350px] h-[400px] text-mint'>
            <Image
              src='/assets/image/tips/hair.png'
              alt='Skincare'
              layout='fill'
              objectFit='cover'
            />
            <div className='right-0 bottom-0 absolute flex flex-col justify-end items-start bg-black/50 px-6 pb-8 w-full h-full'>
              <p className='mb-5 text-white text-sm'>
                Dandruff is a common condition that causes the skin on the scalp
                to flake.
              </p>
              <button className='flex justify-between items-center bg-primary hover:bg-subtext hover:bg-[#c4ac70] px-3 py-2 text-white'>
                <p className='pr-2 text-sm'>Watch Now</p>
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 512 512'
                >
                  <path d='M188.3 147.1C195.8 142.8 205.1 142.1 212.5 147.5L356.5 235.5C363.6 239.9 368 247.6 368 256C368 264.4 363.6 272.1 356.5 276.5L212.5 364.5C205.1 369 195.8 369.2 188.3 364.9C180.7 360.7 176 352.7 176 344V167.1C176 159.3 180.7 151.3 188.3 147.1V147.1zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TipsAdvice
