'use client';

import React, { useEffect, useRef,useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import numbeingss from './image/numbeingss.png';
import image8 from './image/image8.png';
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
          <h1 className='p2fltracker text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[64px]'>Flacon Tracker </h1>
          <h2 className='p2howit text-center text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[64px]'>How It Works?</h2>
          
          <div className='flex justify-between p-20'>

          <div>
             <div className="p2cardd ">
             <h3 className="connectto text-center">Connect to <b /> Telegram</h3>
             <p className="addfa text-center">Add Flacon Tracker to <br /> your Telegram.</p>
            </div>
            </div>

            <div>
             <div className="p2cardd ">
             <h3 className="connectto text-center">Set Your <br /> Parameters</h3>            
             <p className="addfa text-center">Customize your tracking <br /> preferences.</p>
            </div>
            </div>

            <div>
             <div className="p2cardd ">
             <h3 className="connectto text-center">Receive Alerts</h3>
             <p className="addfa text-center">Get real-time notifications <br /> on trending launches.</p>
            </div>
            </div>
            



          </div>

        </div>
    );
};

export default Pagetwo;