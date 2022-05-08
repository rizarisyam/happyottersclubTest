import Head from 'next/head'
import Footer from '../components/Layout/Footer'

import Navbar from '../components/Layout/Navbar'
import Section2 from '../components/Layout/Section2'
import Section4 from '../components/Layout/Section4'
import Section5 from '../components/Layout/Section5'
import Section3 from '../components/Layout/Seection3'
import CurvedText from '../components/UI/CurvedText'

export default function Home() {
  return (
    <>
      <header className='relative h-screen'>
        <div className='h-full bg-hero'>
          {/* <img src='/images/bg_hero.png' className='w-full h-full object-cover' /> */}
        </div>
        <Navbar />

        <div className='absolute top-0 left-0 flex items-center justify-center w-64 max-w-sm transform -rotate-1 py-2 '>
          <img src='/images/HOC_Logos_black.png' className='object-cover transform rotate-90 h-32 z-10' />
        </div>
        <section className='absolute top-0 left-0  h-full flex items-end' >
          <div className='grid grid-cols-2'>
            <div className='h-full'>
              <img src='/images/Charracter.png' className='' />
            </div>
            <div className='flex justify-center'>
              <div className=' flex flex-col items-center max-w-md gap-4'>
                <div className='h-36'>
                  <h1 className='font-[BlueDreamRegular] text-[8rem] w-full text-center'>SOLDOUT</h1>
                </div>
                <img src='/images/divider_.png' className='object-cover w-40' />
                <p className='font-[DmSansBold] leading-5 max-w-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci risus, auctor in rhoncus in, eleifend sed sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam risus elit, rutrum eu sapien vitae, </p>
                <div className=' w-full'>
                  <div className='rounded-full bg-gray-900 inline-block text-gray-50 px-3 py-3'>
                    <button className='uppercase'>view on opensea</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



      </header>
      <section className='relative h-screen flex'>

        <img src='/images/bg_hero.png' className='absolute top-0 left-0 h-full w-full transform rotate-180 ' />
        <img src='/images/about-bg.png' className='absolute top-0 left-0 object-cover h-full w-full' />
        <div className='absolute h-full top-0 left-0 bottom-0 w-full '>
          <div className='mx-16 grid md:grid-cols-2'>
            <div className='h-full justify-end flex flex-col gap-4 '>
              <div className='h-36'>
                <h1 className='text-orange-200 font-[BlueDreamRegular] text-[8rem]'>who we are?</h1>
              </div>
              <img src='/images/divider-1.png' className='w-32' />

              <p className='font-[DmSansBold] leading-8 font-semibold uppercase text-justify max-w-md text-gray-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci risus, auctor in rhoncus in, eleifend sed sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam risus elit, rutrum eu sapien vitae, </p>
            </div>
            <div className='h-full mt-32 flex justify-center items-center'>
              <CurvedText />

            </div>
            {/* <div>
              <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                <g transform="translate(168, -50)">
                  <path className="blob" d="M348.5,362.5Q323,475,193,430.5Q63,386,60,248Q57,110,181,95.5Q305,81,339.5,165.5Q374,250,348.5,362.5Z" fill="none" strokeWidth="7px" stroke="#d1d8e0"></path>
                </g>
              </svg>
            </div> */}

          </div>
        </div>


      </section>
      <section className='h-4/5 bg-black flex px-40 py-8'>
        <div className='relative  w-72'>
          <div className='w-full h-full border border-orange-400 rounded-full'></div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-gray-50 text-8xl'>utility</h1>
          </div>
        </div>
        <div className=' relative max-w-3xl flex-1 mx-8'>
          <img src='/images/ultilities_line.png' />
          <div className='absolute top-0 right-0 flex flex-col gap-[88px]'>
            <h1 className='text-gray-50 uppercase'>investing in start-ups within our community</h1>
            <h1 className='text-gray-50 uppercase'>discounts and perks across different brands</h1>
            <h1 className='text-gray-50 uppercase'>bi-weekly & eth giveaway</h1>
          </div>
        </div>
      </section>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />


    </>
  )
}
