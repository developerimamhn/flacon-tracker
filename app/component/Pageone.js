'use client';

import React, { useEffect, useRef,useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import mobilephoto from './image/mobilephoto.png';

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
       <div>
        <h1 className='p1h1'>
          Persona Wallet supported  <p className='p1br'>by Features</p>
        </h1>
        <h2 className='p1h2 pt-[32px]'>
          Persona Wallet supported by Naxion Network Store all of your crypto and NFTs in one <br /> 
          place & Protectyour digital assets with industry-leading security!
        </h2>

        <div>
          <section className="relative bg-black text-white py-20 overflow-hidden">
   
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:80px_80px] opacity-20" />

      <div className="relative z-10  mx-auto flex flex-col items-center">
       
        <div className="relative w-[600px] md:w-[380px] grayscale max-h-[400px]">
          <Image
            src={mobilephoto} 
            alt="App Preview"
            width={380}
            height={760}
            className="rounded-3xl shadow-2xl"
          />
        </div>


        <div className="backfroiu absolute top-0 left-40 ">
          <h3 className="multichain">MULTI-CHAIN SUPPORT</h3>
          <p className="tracktoken mt-[12px]">Track Token Launches Across Various <br /> Blockchains With Ease.</p>
        </div>

        <div className='absolute top-4 left-130'>
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
  <g filter="url(#filter0_i_1_75)">
    <circle cx="40" cy="40" r="40" fill="url(#paint0_linear_1_75)"/>
  </g>
  <circle cx="40" cy="40" r="39.1787" stroke="white" stroke-opacity="0.15" stroke-width="1.64262"/>
  <path opacity="0.9" d="M38.7975 28.5831L34.5562 24.3419C31.773 21.5586 27.2667 21.5586 24.4928 24.3419L24.3414 24.4933C21.5581 27.2766 21.5581 31.7829 24.3414 34.5567L28.5826 38.7979C30.9588 41.1742 34.5752 41.496 37.3206 39.8204L40.1796 42.6794C38.504 45.4248 38.8353 49.0412 41.2021 51.4174L45.4433 55.6586C48.2266 58.4419 52.7329 58.4419 55.5067 55.6586L55.6581 55.5072C58.4414 52.7239 58.4414 48.2176 55.6581 45.4438L51.4169 41.2026C49.0407 38.8263 45.4243 38.5045 42.6789 40.1801L39.8199 37.3211C41.505 34.5851 41.1737 30.9593 38.7975 28.5831ZM31.0913 36.2987L26.8407 32.0575C25.449 30.6658 25.449 28.4032 26.8407 27.0116L26.9921 26.8601C28.3838 25.4684 30.6464 25.4684 32.038 26.8601L36.2792 31.1013C37.2449 32.0669 37.5194 33.4396 37.1502 34.6609L33.7137 31.2244C33.0226 30.5333 31.896 30.5333 31.2049 31.2244C30.5138 31.9154 30.5138 33.042 31.2049 33.7331L34.6414 37.1696C33.4297 37.5388 32.0475 37.2643 31.0913 36.2987ZM48.9082 43.7208L53.1589 47.962C54.5505 49.3536 54.5505 51.6162 53.1589 53.0079L53.0074 53.1594C51.6157 54.551 49.3531 54.551 47.9615 53.1594L43.7203 48.9181C42.7547 47.9525 42.4801 46.5798 42.8493 45.3586L46.2858 48.7951C46.9769 49.4862 48.1035 49.4862 48.7946 48.7951C49.4857 48.104 49.4857 46.9774 48.7946 46.2863L45.3486 42.8498C46.5698 42.4806 47.952 42.7551 48.9082 43.7208Z" fill="white"/>
  <defs>
    <filter id="filter0_i_1_75" x="0" y="0" width="80" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="9.96522"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_75"/>
    </filter>
    <linearGradient id="paint0_linear_1_75" x1="-4.48012" y1="-4.129" x2="64.6426" y2="96.3832" gradientUnits="userSpaceOnUse">
      <stop stop-color="#303030"/>
      <stop offset="0.188894" stop-color="#141414"/>
      <stop offset="0.288395" stop-color="#0F0F0F"/>
      <stop offset="0.759772" stop-color="#0E0E0E"/>
      <stop offset="0.815517" stop-color="#131313"/>
      <stop offset="1" stop-color="#303030"/>
    </linearGradient>
  </defs>
</svg>
        </div>

        <div className="backfroiu absolute bottom-0 left-20 ">
          <h3 className="multichain">CUSTOMIZABLE PARAMETERS</h3>
          <p className="tracktoken mt-[12px]">Set And Adjust Alerts Based On Your <br /> Investment Preferences.</p>
        </div>

        <div className='absolute bottom-4 left-130'>
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
  <g filter="url(#filter0_i_1_83)">
    <circle cx="40" cy="40" r="40" fill="url(#paint0_linear_1_83)"/>
  </g>
  <circle cx="40" cy="40" r="39.1787" stroke="white" stroke-opacity="0.15" stroke-width="1.64262"/>
  <path opacity="0.9" fill-rule="evenodd" clip-rule="evenodd" d="M31.4489 41.45H26.0353C25.2373 41.45 24.5859 40.7986 24.5859 40.0007C24.5859 39.2027 25.2373 38.5513 26.0353 38.5513H31.4488C31.9952 37.4523 33.1227 36.7402 34.3694 36.7402C35.6161 36.7402 36.7436 37.4523 37.2901 38.5513H53.9643C54.7623 38.5513 55.4137 39.2027 55.4137 40.0007C55.4137 40.7987 54.7623 41.45 53.9643 41.45H37.2899C36.7435 42.549 35.6162 43.2612 34.3694 43.2612C33.1227 43.2612 31.9954 42.549 31.4489 41.45ZM42.8686 49.8595C43.4143 48.7617 44.5398 48.0484 45.7853 48.0484C47.032 48.0484 48.1593 48.7606 48.7057 49.8595H53.9643C54.7623 49.8595 55.4137 50.5108 55.4137 51.3088C55.4137 52.1068 54.7623 52.7582 53.9643 52.7582H48.706C48.1595 53.8572 47.032 54.5693 45.7853 54.5693C44.5398 54.5693 43.414 53.856 42.8683 52.7582H26.0353C25.2373 52.7582 24.5859 52.1068 24.5859 51.3088C24.5859 50.5109 25.2373 49.8595 26.0353 49.8595H42.8686ZM42.8684 27.2422C43.414 26.1443 44.5397 25.4309 45.7853 25.4309C47.0321 25.4309 48.1596 26.1431 48.7059 27.2422H53.9643C54.7623 27.2422 55.4137 27.8936 55.4137 28.6916C55.4137 29.4895 54.7623 30.1409 53.9643 30.1409H48.7059C48.1595 31.24 47.0322 31.9522 45.7853 31.9522C44.5397 31.9522 43.414 31.2389 42.8684 30.1409H26.0353C25.2373 30.1409 24.5859 29.4896 24.5859 28.6916C24.5859 27.8936 25.2373 27.2422 26.0353 27.2422H42.8684Z" fill="white"/>
  <defs>
    <filter id="filter0_i_1_83" x="0" y="0" width="80" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="9.96522"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_83"/>
    </filter>
    <linearGradient id="paint0_linear_1_83" x1="-4.48012" y1="-4.129" x2="64.6426" y2="96.3832" gradientUnits="userSpaceOnUse">
      <stop stop-color="#303030"/>
      <stop offset="0.188894" stop-color="#141414"/>
      <stop offset="0.288395" stop-color="#0F0F0F"/>
      <stop offset="0.759772" stop-color="#0E0E0E"/>
      <stop offset="0.815517" stop-color="#131313"/>
      <stop offset="1" stop-color="#303030"/>
    </linearGradient>
  </defs>
</svg>
        </div>

        <div className="backfroiu absolute top-0 right-40  ">
          <h3 className="multichain">REAL-TIME ALERTS</h3>
          <p className="tracktoken mt-[12px]">Get Notified Instantly About Trending <br /> Tokens.</p>
        </div>

         <div className='absolute top-4 right-130'>
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
  <g filter="url(#filter0_i_1_94)">
    <circle cx="40" cy="40" r="40" fill="url(#paint0_linear_1_94)"/>
  </g>
  <circle cx="40" cy="40" r="39.1787" stroke="white" stroke-opacity="0.15" stroke-width="1.64262"/>
  <path d="M39.9987 20.168C29.0632 20.168 20.167 29.0648 20.167 40.0004C20.167 41.0067 20.986 41.8257 21.9923 41.8257C22.9993 41.8257 23.8183 41.0067 23.8183 40.0004C23.8183 31.0787 31.0764 23.8199 39.9981 23.8199C48.9198 23.8199 56.1785 31.0787 56.1785 40.0004C56.1785 48.922 48.9211 56.1801 39.9987 56.1801C35.3131 56.1801 30.9236 54.1841 27.8461 50.6773L28.6167 50.1016C29.0721 49.7608 29.3039 49.2207 29.2377 48.6558C29.1708 48.0909 28.8186 47.6189 28.2957 47.3947L22.898 45.0796C22.2789 44.8153 21.5421 44.9834 21.0981 45.4828C20.8013 45.8172 20.6612 46.2649 20.7147 46.7114L21.4089 52.5434C21.5026 53.3357 22.1758 53.9331 22.9744 53.9331C23.3139 53.9331 23.6381 53.8242 23.9139 53.6185L24.9138 52.8708C28.6938 57.3036 34.1539 59.8321 40 59.8321C50.9356 59.8321 59.8324 50.9359 59.8324 40.0004C59.8324 29.0648 50.9343 20.168 39.9987 20.168Z" fill="white"/>
  <path d="M50.8767 34.5599C50.8493 34.4707 50.8079 34.3739 50.7531 34.2708C50.485 33.7479 49.9481 33.4243 49.3634 33.4243C49.1023 33.4243 48.8475 33.4931 48.6272 33.6033L40.5774 37.5521C40.1921 37.4489 39.7864 37.4489 39.401 37.538L33.9384 35.4809C33.6014 35.3363 33.2365 35.3159 32.8856 35.4191C32.4385 35.5496 32.0805 35.8662 31.8946 36.2859C31.5576 37.0699 31.9149 37.9851 32.6856 38.3157L37.6457 40.7652C37.9967 41.7282 38.9253 42.3887 39.9641 42.3887C40.1978 42.3887 40.4322 42.3613 40.6589 42.2925C41.3678 42.0791 41.9525 41.5562 42.2346 40.8684L50.0984 36.3967C50.7601 36.0464 51.09 35.2758 50.8767 34.5599ZM40.3679 41.3563C40.2405 41.3926 40.1067 41.411 39.9787 41.411C39.3705 41.411 38.8297 41.0034 38.6591 40.4257C38.4463 39.6959 38.8597 38.9303 39.5896 38.7169C40.2946 38.51 41.085 38.936 41.2984 39.6475C41.5111 40.371 41.0914 41.1435 40.3679 41.3563Z" fill="white"/>
  <defs>
    <filter id="filter0_i_1_94" x="0" y="0" width="80" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="9.96522"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_94"/>
    </filter>
    <linearGradient id="paint0_linear_1_94" x1="-4.48012" y1="-4.129" x2="64.6426" y2="96.3832" gradientUnits="userSpaceOnUse">
      <stop stop-color="#303030"/>
      <stop offset="0.188894" stop-color="#141414"/>
      <stop offset="0.288395" stop-color="#0F0F0F"/>
      <stop offset="0.759772" stop-color="#0E0E0E"/>
      <stop offset="0.815517" stop-color="#131313"/>
      <stop offset="1" stop-color="#303030"/>
    </linearGradient>
  </defs>
</svg>
        </div>

        <div className="backfroiu absolute bottom-0 right-20">
          <h3 className="multichain">USER-FRIENDLY INTERFACE</h3>
          <p className="tracktoken mt-[12px]">Easily Manage And Configure Your Settings <br /> Via Telegram.</p>
        </div>

         <div className='absolute bottom-4 right-120'>
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
  <g filter="url(#filter0_i_1_86)">
    <circle cx="40" cy="40" r="40" fill="url(#paint0_linear_1_86)"/>
  </g>
  <circle cx="40" cy="40" r="39.1787" stroke="white" stroke-opacity="0.15" stroke-width="1.64262"/>
  <path d="M29.3895 58.4356H50.6878C51.9856 58.4356 53.207 57.7485 54.0467 56.8325C54.8864 55.9164 55.3445 54.6187 55.2681 53.3209L54.8101 46.5268C54.8101 46.4505 54.8101 46.3741 54.8101 46.2978C54.3521 43.9313 51.8329 41.9465 47.2526 40.4197C46.7946 40.2671 46.4129 39.8854 46.2602 39.4273C46.1839 39.1983 46.1075 38.7403 46.3366 38.2059C47.0999 36.9082 47.9397 35.3051 48.3977 32.7859C49.0084 29.2744 48.3214 26.2208 46.4129 24.1597C44.8861 22.4803 42.596 21.5642 40.0005 21.5642C37.3287 21.5642 35.1148 22.4803 33.5881 24.1597C31.6796 26.2208 30.9926 29.2744 31.6033 32.7859C32.0613 35.3051 32.901 36.9845 33.6644 38.2059C33.9698 38.7403 33.8934 39.1983 33.7408 39.4273C33.5881 39.8854 33.2064 40.1907 32.7484 40.4197C28.2444 42.0229 25.7252 44.0076 25.1909 46.2978C25.1909 46.4505 25.1145 46.6031 24.7328 53.3209C24.6565 54.6187 25.1145 55.9164 25.9543 56.8325C26.794 57.7485 28.0917 58.4356 29.3895 58.4356ZM28.2444 46.9085C28.3971 45.9924 30.0002 44.6183 33.8171 43.2443C35.1148 42.7862 36.1836 41.7938 36.6416 40.4197C37.0996 39.122 36.947 37.7479 36.2599 36.6028C35.6492 35.5341 34.9622 34.2364 34.6568 32.1752C34.1988 29.5797 34.6568 27.4423 35.8782 26.1445C36.8706 25.0758 38.2447 24.5414 40.0768 24.5414C41.9089 24.5414 43.283 25.0758 44.2754 26.1445C45.4968 27.5186 45.9549 29.6561 45.4968 32.1752C45.1152 34.2364 44.5044 35.5341 43.8937 36.6028C43.2067 37.7479 43.054 39.122 43.512 40.4197C43.9701 41.7175 45.0388 42.7099 46.3366 43.2443C50.0008 44.542 51.6039 45.9161 51.8329 46.8322L52.2909 53.4736C52.2909 53.8553 52.1383 54.466 51.9093 54.7713C51.6039 55.0767 51.2222 55.382 50.7642 55.382H29.3895C28.9314 55.382 28.5498 55.0767 28.2444 54.7713C27.9391 54.466 27.7864 54.0079 27.8627 53.5499C28.1681 47.8246 28.2444 46.9085 28.2444 46.9085Z" fill="white"/>
  <defs>
    <filter id="filter0_i_1_86" x="0" y="0" width="80" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="9.96522"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_86"/>
    </filter>
    <linearGradient id="paint0_linear_1_86" x1="-4.48012" y1="-4.129" x2="64.6426" y2="96.3832" gradientUnits="userSpaceOnUse">
      <stop stop-color="#303030"/>
      <stop offset="0.188894" stop-color="#141414"/>
      <stop offset="0.288395" stop-color="#0F0F0F"/>
      <stop offset="0.759772" stop-color="#0E0E0E"/>
      <stop offset="0.815517" stop-color="#131313"/>
      <stop offset="1" stop-color="#303030"/>
    </linearGradient>
  </defs>
</svg>
        </div>

      </div>
    </section>


        </div>


       </div>
    );
};

export default Pageone;