"use client"

import Link from 'next/link'
import React from 'react'
//
import { useEffect, useRef } from "react";

import lottie from 'lottie-web';

import AnimationOne from "media/extraordinary-one.json"
import AnimationTwo from "media/extraordinary-two.json"

const Extraordinary = () => {
    const animeOne = useRef(null);
    const animeTwo = useRef(null);

    useEffect(() => {
        console.log("Inside useEffect");

        const containerOne = document.getElementById('animationOne');
        const containerTwo = document.getElementById('animationTwo');

        if (animeOne.current) {
            animeOne.current.destroy();
        }

        if (animeTwo.current) {
            animeTwo.current.destroy();
        }

        console.log("Container One:", containerOne);
        console.log("Container Two:", containerTwo);

        animeOne.current = lottie.loadAnimation({
            container: containerOne,
            animationData: AnimationOne,
            loop: true,
            autoplay: true,
            renderer: "svg",
        });

        animeTwo.current = lottie.loadAnimation({
            container: containerTwo,
            animationData: AnimationTwo,
            loop: true,
            autoplay: true,
            renderer: "svg",
        });

        return () => {
            if (animeOne.current) {
                animeOne.current.destroy();
            }
            if (animeTwo.current) {
                animeTwo.current.destroy();
            }
        };

    }, []);


    return (
        <>
            <section className='pt-[30px] md:pt-[70px] relative lg:h-[100vh]'>
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <h2 className='text-[30px] md:text-[40px] lg:text-[55px] leading-tight font-bold font-sans text-center text-black mb-3'>Endeavor to Conceive an Exceptional Creation</h2>
                            <p className='text-[13px] sm:text-[17px] leading-[21px] font-sans text-center text-black lg:w-9/12 mx-auto mb-10'>Are you ready for our video animation services? If yes, then you are about to enter into a portal that leads to never-ending artistic creativity and vigor.</p>
                            <div className="flex flex-wrap items-center justify-center gap-3">
                                <div className="btns">
                                    <Link class="text-[16px] font-semibold leading-[25px] text-white bg-[#FF2D4B] dropShadow rounded-[5px] w-[318px] h-[44px] poppins flex items-center justify-center" href="javascript:;">Make an Animation</Link>
                                </div>
                                <div className="btns">
                                    <Link class="text-[16px] font-semibold leading-[25px] text-white bg-black rounded-[5px] w-[318px] md:w-[214px] h-[44px] shadow-2xl poppins flex items-center justify-center" href="javascript:;">Live Chat</Link>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <div id="animationTwo" className='lg:absolute bottom-0 lg:bottom-[-54px] 2xl:bottom-[-30px] left-[70px] max-w-[170px] md:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[600px]'></div>
                                    <div id="animationOne" className='max-w-[500px] 2xl:max-w-full lg:absolute top-[50%] xl:top-[31%] 2xl:top-[31%] 3xl:top-[50%] right-[40px]'></div>
                                </div>
                                {/* <Image src={Animation} alt='Animation Studio' className='w-11/12 mx-auto' /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Extraordinary
