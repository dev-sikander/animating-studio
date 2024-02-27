"use client"

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


// swiper start
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// ===== Images Start
import Slide1 from "media/home/animate1.png"
import Slide2 from "media/home/animate2.png"
import Slide3 from "media/home/animate3.png"
import Arrow from "media/home/slide-arrow.png"
import VideoIco from "media/icons/play.png"

const Animation = () => {

    return (
        <>
            <section className='pt-[40px] md:pt-[70px] pb-[30px] lg:pb-[120px] relative'>
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="content">
                                <h2 className='text-[30px] lg:text-[50px] leading-tight font-sans font-bold text-black text-center'>Master the Art of Video Animation</h2>
                                <p className='text-black text-[13px] lg:text-[16px] font-sans text-center'>When it comes to 3D animation services, we are quite well-equipped and well-versed.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider mt-4 sm:mt-7 lg:mt-12 px-4 xl:px-0 h-[200%]">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        arrows={true}
                        slidesPerView={typeof window !== 'undefined' && window.innerWidth >= 1200 ? 2 : 1}
                        navigation={true}
                        autoHeight={true}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        coverflowEffect={{
                            rotate: -20,      // Set the rotation angle
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="mySwiper" >
                        <SwiperSlide className='relative pt-4'>
                            <Image src={Slide1} alt='Slide' className='rounded-[30px] w-full relative top-0 left-0' />
                            <div className="absolute bottom-[2px] left-0 w-full h-[96%] 3xl:h-[97%] flex items-start justify-end flex-col bg-black/40 rounded-[30px] px-[40px] pb-[40px]">
                                <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">Video Animation Services</h3>
                                <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>We can add that vividness, vibrancy, and a strong taste of zestfulness to those mundane corporate videos, making your brand truly stand out.</p>

                                <Link href="javascript:;" className='text-white font-[600] text-[13px] md:text-[16px] poppins pt-4 flex items-center gap-x-3'>Make an Animation
                                    <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                </Link>
                                <Image src={VideoIco} alt='video-icon' className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] md:block hidden' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='relative pt-4'>
                            <Image src={Slide2} alt='Slide' className='rounded-[30px] w-full relative top-0 left-0' />
                            <div className="absolute bottom-[2px] left-0 w-full h-[96%] 3xl:h-[97%] flex items-start justify-end flex-col bg-black/40 rounded-[30px] px-[40px] pb-[40px]">
                                <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">Explainer Videos Services</h3>
                                <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>We like to explain things, but it’s not just that…we want your audience to enjoy the seeing and listening experience as well with our explainer videos.</p>

                                <Link href="javascript:;" className='text-white font-[600] text-[13px] md:text-[16px] poppins pt-4 flex items-center gap-x-3'>Make an Animation
                                    <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                </Link>
                                <Image src={VideoIco} alt='video-icon' className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] md:block hidden' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='relative pt-4'>
                            <Image src={Slide3} alt='Slide' className='rounded-[30px] w-full relative top-0 left-0' />
                            <div className="absolute bottom-[2px] left-0 w-full h-[96%] 3xl:h-[97%] flex items-start justify-end flex-col bg-black/40 rounded-[30px] px-[40px] pb-[40px]">
                                <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">Whiteboard Animation Services</h3>
                                <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>A whiteboard is a wonderful blank space to start or unleash creativity. Well, truth be told, we don’t view a whiteboard as a whiteboard, we view it as a canvas that can be splendidly colored.</p>

                                <Link href="javascript:;" className='text-white font-[600] text-[13px] md:text-[16px] poppins pt-4 flex items-center gap-x-3'>Make an Animation
                                    <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                </Link>
                                <Image src={VideoIco} alt='video-icon' className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] md:block hidden' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='relative pt-4'>
                            <Image src={Slide1} alt='Slide' className='rounded-[30px] w-full relative top-0 left-0' />
                            <div className="absolute bottom-[2px] left-0 w-full h-[96%] 3xl:h-[97%] flex items-start justify-end flex-col bg-black/40 rounded-[30px] px-[40px] pb-[40px]">
                                <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">Video Animation Services</h3>
                                <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>We can add that vividness, vibrancy, and a strong taste of zestfulness to those mundane corporate videos, making your brand truly stand out.</p>

                                <Link href="javascript:;" className='text-white font-[600] text-[13px] md:text-[16px] poppins pt-4 flex items-center gap-x-3'>Make an Animation
                                    <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                </Link>
                                <Image src={VideoIco} alt='video-icon' className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] md:block hidden' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='relative pt-4'>
                            <Image src={Slide2} alt='Slide' className='rounded-[30px] w-full relative top-0 left-0' />
                            <div className="absolute bottom-[2px] left-0 w-full h-[96%] 3xl:h-[97%] flex items-start justify-end flex-col bg-black/40 rounded-[30px] px-[40px] pb-[40px]">
                                <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">Explainer Videos Services</h3>
                                <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>We like to explain things, but it’s not just that…we want your audience to enjoy the seeing and listening experience as well with our explainer videos.</p>

                                <Link href="javascript:;" className='text-white font-[600] text-[13px] md:text-[16px] poppins pt-4 flex items-center gap-x-3'>Make an Animation
                                    <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                </Link>
                                <Image src={VideoIco} alt='video-icon' className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] md:block hidden' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='relative pt-4'>
                            <Image src={Slide3} alt='Slide' className='rounded-[30px] w-full relative top-0 left-0' />
                            <div className="absolute bottom-[2px] left-0 w-full h-[96%] 3xl:h-[97%] flex items-start justify-end flex-col bg-black/40 rounded-[30px] px-[40px] pb-[40px]">
                                <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">Whiteboard Animation Services</h3>
                                <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>A whiteboard is a wonderful blank space to start or unleash creativity. Well, truth be told, we don’t view a whiteboard as a whiteboard, we view it as a canvas that can be splendidly colored.</p>

                                <Link href="javascript:;" className='text-white font-[600] text-[13px] md:text-[16px] poppins pt-4 flex items-center gap-x-3'>Make an Animation
                                    <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                </Link>
                                <Image src={VideoIco} alt='video-icon' className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] md:block hidden' />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Animation
