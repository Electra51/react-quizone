import React from 'react';
import image from '../../images/image1.png';


const Home = () => {
  return (
    <div className='px-4 py-16 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10'>
      <div className='flex flex-col items-center justify-between lg:flex-row'>
        <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
          <div className='max-w-xl mb-6 lg:mt-8'>
            
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
              Welcome an amazing online <span className='inline-block text-blue-400'>QuiZone</span>
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
            Take these quiz at QuiZone to test your knowledge on a variety of fun and interesting topics. 
            </p>
          </div>
          <div className=''>
            <a
              href='/books'
              className='inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none'
            >
              <span className='mr-1 items-center'>Get Started</span>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-0'
              >
               
                
              </svg>
            </a>
            
          </div>
        </div>
        <div className='relative lg:w-1/2 '>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home