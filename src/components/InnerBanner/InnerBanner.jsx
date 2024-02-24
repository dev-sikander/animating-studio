import React from 'react'
import Image from 'next/image';

// icons 
import { Star } from 'heroicons-react';

// ====== Images  
import PartiOne from "media/home/banner-4.png"
import PartiTwo from "media/home/banner-3.png"

// ====== Videos  
// import Bannervideo from "public/2d-animation/banner-vid.mp4"

const InnerBanner = ({ content }) => {
    const { title, para, list, bannerImage, isList } = content
    return (
        <>
            <section className='py-[30px] md:py-[70px]'>
                <Image src={PartiOne} alt='Particle' className=' absolute right-0 bottom-[-45%] w-[9%] lg:block hidden' />
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 items-center gap-y-5">
                        <div className="col-span-12 md:col-span-6">
                            <div className="txt">
                                <h1 className='text-[30px] sm:text-[35px] lg:text-[45px] font-bold text-black font-sans leading-[35px] sm:leading-[45px] lg:leading-[50px] pt-2 md:pt-4 pb-2 md:pb-5 lg:w-11/12'>
                                    {title}
                                </h1>
                                {isList ? <ul className='mb-4'>
                                    {list.map((item, index) => (
                                        <li key={index} className='text-[13px] sm:text-[16px] font-sans text-black leading-[19px] pb-4 lg:w-10/12'>{item}</li>
                                    ))}
                                </ul> : <p className='text-[13px] sm:text-[16px] font-sans text-black leading-[19px] pb-6 lg:w-10/12'>
                                    {para}
                                </p>}

                                <div className="flex items-center">
                                    <div className="reviews flex items-center justify-center gap-x-1">
                                        <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                                        <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                                        <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                                        <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                                        <Star className='text-[#FFD62B] text-[22px] w-[22px] h-[22px]' />
                                    </div>
                                    <div className="content">
                                        <p className='text-[13px] sm:text-[16px] text-black font-sans ms-2'><strong>4.8 out of 5</strong> (review rating) Over 1,200+ reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <video src={bannerImage} autoPlay={true} controls={false} muted={true} className='w-full h-full'></video>
                            {/* <Image src={bannerImage} alt='Animation Studio' /> */}
                        </div>
                    </div>
                </div>
                <Image src={PartiTwo} alt='Particle' className='absolute left-0 bottom-[-28%] w-[7%] lg:block hidden' />
            </section>
        </>
    )
}

export default InnerBanner
