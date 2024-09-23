import React from 'react'

const Footer = () => {
  return (
      <div className='w-full '>
          <div className='max-w-screen-xl mx-auto py-10 lg:flex lg:gap-32 ml-16  lg:ml-32'>
              <div className='basis-1/2'>
              <h1 className=' text-6xl font-semibold tracking-tight leading-none lg:text-[12rem]  mb-10 lg:mb-20 '>Refokus.</h1></div>
              <div className='lg:basis-1/2 flex gap-20 mx-auto '>
                  <div className='p-2 '>
                      <h4 className='mb-8 '>Socials</h4>
                      {["instagram", "twitter(x?)", "LinkedIn"].map((item, index) => <a key={index} className='block mt-3 text-zinc-600 '>{item}</a>)
                      }
                  </div>
                  <div className='p-2 mb-20'>
                      <h4 className='mb-8'>Socials</h4>
                      {["instagram", "twitter(x?)", "LinkedIn"].map((item, index) => <a key={index} className='block mt-3 text-zinc-600 '>{item}</a>)
                      }
                  </div>
                 
              </div>
          </div>
    </div>
  )
}

export default Footer