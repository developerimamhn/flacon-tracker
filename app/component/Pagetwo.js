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
        <div>
          <h1 className='p2fltracker text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[64px] mt-[68px] sm:mt-[108px] md:mt-[128px] lg:mt-[138px] xl:mt-[158px] 2xl:mt-[170px]'>Flacon Tracker </h1>
          <h2 className='p2howit text-center text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[64px]'>How It Works?</h2>

          <div className='grid grid-cols-3 gap-[32px] p-20'>

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
             <p className="addfa ">Get real-time notifications<br /> on trending launches.</p>
            </div>
            </div>
            



          </div>

        </div>
    );
};

export default Pagetwo;