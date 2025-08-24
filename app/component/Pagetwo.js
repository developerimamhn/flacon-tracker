'use client';

import React, { useEffect, useRef,useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image8 from './image/image8.png';
import image9 from './image/image9.png';
import image10 from './image/image10.png';
import Image from 'next/image';
import Link from 'next/link';
import Crxconving from './Crxconving';

gsap.registerPlugin(ScrollTrigger);


const Pagetwo = () => {
    const [isOpen, setIsOpen] = useState(false);
    

    const wrapperRef = useRef(null); // Outer container
  const gridItem1Ref = useRef(null); // First grid item
  const gridItem2Ref = useRef(null); // Second grid item
  const gridItem3Ref = useRef(null); // Third grid item
  const titleRef = useRef(null); // "Core Products" title
  const acquireRef = useRef(null); // "Acquire CRX" section

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;

        // Main wrapper animation
        gsap.fromTo(
          wrapperRef.current,
          { y: isMobile ? 50 : 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: isMobile ? 1 : 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: isMobile ? 'top 90%' : 'top 80%',
              end: 'top 20%',
              scrub: 0.8,
            },
          }
        );

        // Title animation
        gsap.fromTo(
          titleRef.current,
          { y: 30, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 85%',
              end: 'top 50%',
              scrub: 0.8,
            },
          }
        );

        // Grid items animation (individual with slight stagger)
        [gridItem1Ref, gridItem2Ref, gridItem3Ref].forEach((ref, index) => {
          gsap.fromTo(
            ref.current,
            { y: 50, opacity: 0, scale: 0.9 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              delay: index * 0.25, // Manual stagger effect
              ease: 'power3.out',
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 80%',
                end: 'top 30%',
                scrub: 0.8,
              },
            }
          );
        });

        // Acquire CRX section animation
        gsap.fromTo(
          acquireRef.current,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: acquireRef.current,
              start: 'top 85%',
              end: 'top 40%',
              scrub: 0.8,
            },
          }
        );
      }
    );

    return () => mm.revert(); // Cleanup
  }, []);



  // advds

  const itemRefs = useRef([]);
  
    useEffect(() => {
      itemRefs.current.forEach((el, index) => {
        if (!el) return;
  
        gsap.fromTo(
          el,
          {
            autoAlpha: 0,
            y: 50,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 100%',
              toggleActions: 'play none none none',
            },
            delay: index * 0.1, // Delay between each item
          }
        );
      });
    }, []);


    
    return (
        <div className='container  relative mx-auto px-[24px] sm:px-[40px] md:px-[64px] lg:px-[96px] xl:px-[128px] 2xl:px-[178px] '>
          <svg className='absolute top-[-8.5%] left-[26.5%]' xmlns="http://www.w3.org/2000/svg" width="201" height="189" viewBox="0 0 201 189" fill="none">
                <path d="M77.1411 148.464C77.6701 148.324 77.9851 147.781 77.8447 147.252C77.7043 146.723 77.1617 146.408 76.6327 146.548L76.8869 147.506L77.1411 148.464ZM146.011 80.7718L145.099 80.3839L146.011 80.7718ZM135.449 98.8312C135.563 99.3665 136.089 99.7083 136.624 99.5945L145.348 97.7406C145.883 97.6269 146.225 97.1007 146.111 96.5654C145.997 96.0301 145.471 95.6883 144.936 95.8021L137.181 97.45L135.534 89.6958C135.42 89.1605 134.894 88.8188 134.358 88.9325C133.823 89.0463 133.481 89.5725 133.595 90.1078L135.449 98.8312ZM52.358 144.244L52.9994 143.488C45.9306 137.486 44.2102 126.13 47.6182 112.224C51.0104 98.3825 59.4263 82.3368 72.1005 67.4107L71.3451 66.7693L70.5898 66.1279C57.7597 81.2377 49.1731 97.5532 45.6933 111.752C42.2293 125.887 43.7674 138.249 51.7166 144.999L52.358 144.244ZM71.3451 66.7693L72.1005 67.4107C84.7746 52.4846 99.2438 41.5789 112.352 35.9878C125.522 30.3707 137.007 30.2274 144.076 36.2297L144.717 35.4743L145.358 34.719C137.409 27.9691 124.961 28.4554 111.575 34.1649C98.1277 39.9003 83.4199 51.0182 70.5898 66.1279L71.3451 66.7693ZM76.8869 147.506L76.6327 146.548C66.8723 149.139 58.5704 148.219 52.9994 143.488L52.358 144.244L51.7166 144.999C57.985 150.322 67.0637 151.138 77.1411 148.464L76.8869 147.506ZM144.717 35.4743L144.076 36.2297C148.665 40.1267 151.001 46.2627 151.139 53.9351C151.278 61.6084 149.209 70.722 145.099 80.3839L146.011 80.7718L146.923 81.1597C151.106 71.3271 153.266 61.9314 153.121 53.8994C152.976 45.8664 150.519 39.1009 145.358 34.719L144.717 35.4743ZM146.011 80.7718L145.099 80.3839C142.639 86.1666 139.453 92.1323 135.587 98.0855L136.418 98.6252L137.249 99.165C141.173 93.123 144.415 87.056 146.923 81.1597L146.011 80.7718Z" fill="url(#paint0_linear_1_285)"/>
                <path d="M88.4937 173.036C82.0991 159.111 88.2041 142.638 102.13 136.243C88.2041 142.638 71.7315 136.533 65.3369 122.607C71.7315 136.533 65.6264 153.006 51.701 159.4C65.6264 153.006 82.0991 159.111 88.4937 173.036Z" fill="url(#paint1_radial_1_285)"/>
                <defs>
                  <linearGradient id="paint0_linear_1_285" x1="153.306" y1="83.3024" x2="32.9947" y2="61.131" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" stop-opacity="0.4"/>
                    <stop offset="0.21784" stop-color="white"/>
                    <stop offset="0.578937" stop-color="white" stop-opacity="0.44"/>
                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                  </linearGradient>
                  <radialGradient id="paint1_radial_1_285" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76.9153 147.822) rotate(-114.665) scale(32.0809)">
                    <stop stop-color="white"/>
                    <stop offset="1" stop-color="#353535"/>
                  </radialGradient>
                </defs>
            </svg>
          <h1 className='p2fltracker text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[64px] mt-[68px] sm:mt-[108px] md:mt-[128px] lg:mt-[138px] xl:mt-[158px] 2xl:mt-[170px] '>Flacon Tracker </h1>
          
          <h2 className='p2howit text-center text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[64px]'>How It Works?</h2>
          
          <div className='grid grid-cols-3 gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[31px] p-[20px] sm:p-[24px] md:p-[32px] lg:p-[36px] xl:p-[40px] 2xl:p-[45px]'>

          <div>
             <div className="p2cardd p-[20px] sm:p-[24px] md:p-[32px] lg:p-[36px] xl:p-[40px] 2xl:p-[45px]">
             <h3 className="connectto ">Connect to <br /> Telegram</h3>
             <Image src={image8} alt="Image"  className="mx-auto h-[36px] sm:h-[40px] md:h-[48px] lg:h-[64px] xl:h-[105px] 2xl:h-[113px] w-[36px] sm:w-[40px] md:w-[48px] lg:w-[64px] xl:w-[105px] 2xl:w-[113px]  mt-[20px] sm:mt-[24px] md:mt-[32px] lg:mt-[36px] xl:mt-[40px] 2xl:mt-[44px] mb-[24px] sm:mb-[32px] md:mb-[36px] lg:mb-[40px] xl:mb-[48px] 2xl:mb-[70px]" />
             <p className="addfa ">Add Flacon Tracker to <br /> your Telegram.</p>
             
            </div>
            </div>

           <div>
             <div className="p2cardd p-[20px] sm:p-[24px] md:p-[32px] lg:p-[36px] xl:p-[40px] 2xl:p-[45px]">
             <h3 className="connectto ">Set Your <br /> Parameters</h3>
             <Image src={image9} alt="Image"  className="mx-auto h-[36px] sm:h-[40px] md:h-[48px] lg:h-[64px] xl:h-[105px] 2xl:h-[113px] w-[36px] sm:w-[40px] md:w-[48px] lg:w-[64px] xl:w-[105px] 2xl:w-[113px]  mt-[20px] sm:mt-[24px] md:mt-[32px] lg:mt-[36px] xl:mt-[40px] 2xl:mt-[44px] mb-[24px] sm:mb-[32px] md:mb-[36px] lg:mb-[40px] xl:mb-[48px] 2xl:mb-[70px]" />
             <p className="addfa ">Customize your tracking  <br /> preferences.</p>
            </div>
            </div>

            <div>
                <div className="p2cardd p-[20px] sm:p-[24px] md:p-[32px] lg:p-[36px] xl:p-[40px] 2xl:p-[45px]">
                <h3 className="connectto ">Receive Alerts</h3>
                <Image src={image10} alt="Image"  className="mx-auto h-[36px] sm:h-[40px] md:h-[48px] lg:h-[64px] xl:h-[105px] 2xl:h-[113px] w-[36px] sm:w-[40px] md:w-[48px] lg:w-[64px] xl:w-[105px] 2xl:w-[113px]  mt-[60px] sm:mt-[64px] md:mt-[70px] lg:mt-[75px] xl:mt-[80px] 2xl:mt-[89px] mb-[24px] sm:mb-[32px] md:mb-[36px] lg:mb-[40px] xl:mb-[48px] 2xl:mb-[70px]" />
                <p className="addfa ">Get real-time notifications <br /> on trending launches.</p>
                </div>
            </div>
            



          </div>

        </div>
    );
};

export default Pagetwo;