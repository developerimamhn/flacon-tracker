'use client';

import React, { useEffect, useRef,useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import mobilephoto from './image/Final page.png';

import Image from 'next/image';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import Crxconving from './Crxconving';

gsap.registerPlugin(ScrollTrigger);



const Pageone = () => {
  const wrapperRef = useRef(null);
  const gridItem1Ref = useRef(null);
  const gridItem2Ref = useRef(null);
  const gridItem3Ref = useRef(null);
  const titleRef = useRef(null);
  const acquireRef = useRef(null);

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


  // itesms

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
      <div className='posigoandsa'>
        <div className='container mx-auto pt-[40px] sm:pt-[48px] md:pt-[64px] lg:pt-[96px] xl:pt-[128px] 2xl:pt-[150px]'>
          <h1 className='p1h1 text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[60px]'>
            Persona Wallet <br/> supported <span className='p1br text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[60px]'>by Features </span>
          </h1>
          <h2 className='p1h2 pt-[32px] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>
            Persona Wallet supported by Naxion Network Store all of your crypto and NFTs in one <br /> 
            place & Protectyour digital assets with industry-leading security!
          </h2>
          <svg className='absolute top-[15.5%] right-[22.5%]' xmlns="http://www.w3.org/2000/svg" width="157" height="178" viewBox="0 0 157 178" fill="none">
              <path d="M32.1053 51.3507C32.0936 51.8979 32.5276 52.351 33.0747 52.3627C33.6219 52.3745 34.0749 51.9405 34.0867 51.3934L33.096 51.3721L32.1053 51.3507ZM78.0495 136.289L78.675 135.52L78.0495 136.289ZM63.6264 121.133C63.0805 121.094 62.6063 121.505 62.5672 122.051L61.9298 130.946C61.8907 131.492 62.3015 131.967 62.8473 132.006C63.3932 132.045 63.8674 131.634 63.9066 131.088L64.4731 123.181L72.3802 123.748C72.9261 123.787 73.4003 123.376 73.4394 122.83C73.4785 122.284 73.0677 121.81 72.5219 121.771L63.6264 121.133ZM43.0312 28.7092L43.5792 29.5349C51.3059 24.4074 62.6944 25.9031 75.1101 33.0328C87.4683 40.1296 100.552 52.6643 111.379 68.9799L112.204 68.432L113.03 67.8841C102.07 51.3678 88.7745 38.5943 76.097 31.3142C63.477 24.0672 51.1725 22.1174 42.4833 27.8836L43.0312 28.7092ZM112.204 68.432L111.379 68.9799C122.206 85.2955 128.672 102.221 130.41 116.366C132.155 130.576 129.109 141.651 121.382 146.778L121.93 147.604L122.478 148.43C131.167 142.664 134.151 130.568 132.377 116.124C130.594 101.614 123.99 84.4005 113.03 67.8841L112.204 68.432ZM33.096 51.3721L34.0867 51.3934C34.304 41.2973 37.4895 33.576 43.5792 29.5349L43.0312 28.7092L42.4833 27.8836C35.6314 32.4305 32.3297 40.9269 32.1053 51.3507L33.096 51.3721ZM121.93 147.604L121.382 146.778C116.365 150.108 109.822 150.651 102.412 148.656C95.0014 146.662 86.8185 142.148 78.675 135.52L78.0495 136.289L77.424 137.057C85.7114 143.802 94.1399 148.482 101.897 150.57C109.655 152.658 116.837 152.173 122.478 148.43L121.93 147.604ZM78.0495 136.289L78.675 135.52C73.801 131.553 68.9524 126.838 64.3046 121.473L63.5556 122.122L62.8066 122.771C67.5238 128.216 72.4542 133.012 77.424 137.057L78.0495 136.289Z" fill="url(#paint0_linear_1_10)"/>
              <path d="M5.34867 55.4456C20.5012 53.1626 34.6354 63.5954 36.9184 78.7478C34.6354 63.5954 45.0682 49.4611 60.2207 47.1781C45.0682 49.4611 30.9339 39.0283 28.6509 23.8759C30.9339 39.0283 20.5012 53.1626 5.34867 55.4456Z" fill="url(#paint1_radial_1_10)"/>
              <defs>
                <linearGradient id="paint0_linear_1_10" x1="73.5955" y1="142.596" x2="128.254" y2="33.1482" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0.4"/>
                  <stop offset="0.21784" stop-color="white"/>
                  <stop offset="0.578937" stop-color="white" stop-opacity="0.44"/>
                  <stop offset="1" stop-color="white" stop-opacity="0"/>
                </linearGradient>
                <radialGradient id="paint1_radial_1_10" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(32.7847 51.3118) rotate(-8.56824) scale(32.0809)">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="#353535"/>
                </radialGradient>
              </defs>
        </svg>

          <Image className='w-full pointer-events-none select-none grayscale-100 pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[90px]' src={mobilephoto} alt='Loading...' />
        </div>
      </div>
    );
};

export default Pageone;