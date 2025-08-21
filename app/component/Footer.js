'use client'


import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import logo from "./image/logo.png";







gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null); 
    const menuButtonRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);
  
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
      ) {
        setToggle(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    const handleScroll = (e, sectionId) => {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 50,
          behavior: "smooth",
        });
        setToggle(false);
      }
    };
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    useEffect(() => {
      // Example of animating elements when they come into view
      gsap.fromTo('.feature', 
        { opacity: 0, y: 50 }, 
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          scrollTrigger: {
            trigger: '.feature',
            start: 'top 80%',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        }
      );
  
      // Example of animating the button with scale and opacity
      gsap.fromTo('.buttonaudit-3', 
        { opacity: 0, scale: 0.8 }, 
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'ease-in-out',
          scrollTrigger: {
            trigger: '.buttonaudit-3',
            start: 'top 80%',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        }
      );
    }, []);
  
    const [isTranslated, setIsTranslated] = useState(false);
  
    const handleClick = () => {
      setIsTranslated(true);
      setTimeout(() => {
        setIsTranslated(false);
      }, 200);
    };
    
     const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
  };
    return (
        <div className='footrbkgrnd'>
          <div className='flex p-9 justify-between'>

            <div>
          
                <Image className='w-[400px] h-[38px] sm:h-[37px] 2xl:h-[55.3px]' src={logo} alt=''/>

            </div>

            <div>
                <nav className='navbar-items-main absolute sm:top-0 top-[100%] sm:left-0 sm:relative duration-1000 z-[999] sm:opacity-100 flex justif-start sm:justify-between items-start sm:items-center gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[32px] sm:bg-transparent bg-[#000000] sm:flex-row flex-col w-full sm:w-fit h-screen sm:h-full ml-auto mr-[14px] sm:mr-[15px] md:mr-[16px] lg:mr-[20px] xl:mr-[24px] 2xl:mr-[32px] sm:p-0 p-6
                    '>
                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Home" onClick={(e) => handleScroll(e, "Home")}>
                    Home</a>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-[2px] sm:block hidden' viewBox="0 0 2 15" fill="none">
                        <path opacity="0.25" d="M1.36133 0.0492096L1.36133 14.9508" stroke="white"/>
                        </svg>
                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Features" onClick={(e) => handleScroll(e, "Features")}>
                    Features </a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="15" viewBox="0 0 2 15" fill="none">
                        <path opacity="0.25" d="M1.36133 0.0492096L1.36133 14.9508" stroke="white"/>
                        </svg>

                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#How It Works" onClick={(e) => handleScroll(e, "How It Works")}>
                    How It Works</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="15" viewBox="0 0 2 15" fill="none">
                        <path opacity="0.25" d="M1.36133 0.0492096L1.36133 14.9508" stroke="white"/>
                        </svg>
                    
                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Roadmap" onClick={(e) => handleScroll(e, "Roadmap")}>
                    Roadmap</a>

                    <ul className='sm:hidden block'>
                    <button className='buttonaudit cursor-pointer text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[14.1px] flex items-center h-[36px] md:h-[40px] lg:h-[44px] xl:h-[48px] 2xl:h-[54px] px-[15px] sm:px-[16px] md:px-[20px] lg:px-[24px] xl:px-[28px] 2xl:px-[30px] group gap-[7.50px]'>
                    Contact
                    </button>
                </ul>
                </nav>
                </div>

                <div className='flex'>
                   <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
  <g filter="url(#filter0_i_1_136)">
    <circle cx="28" cy="28" r="28" fill="url(#paint0_linear_1_136)"/>
  </g>
  <circle cx="28" cy="28" r="27.25" stroke="white" stroke-opacity="0.15" stroke-width="1.5"/>
  <defs>
    <filter id="filter0_i_1_136" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="9.96522"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_136"/>
    </filter>
    <linearGradient id="paint0_linear_1_136" x1="-3.13609" y1="-2.8903" x2="45.2498" y2="67.4683" gradientUnits="userSpaceOnUse">
      <stop stop-color="#303030"/>
      <stop offset="0.188894" stop-color="#141414"/>
      <stop offset="0.288395" stop-color="#0F0F0F"/>
      <stop offset="0.759772" stop-color="#0E0E0E"/>
      <stop offset="0.815517" stop-color="#131313"/>
      <stop offset="1" stop-color="#303030"/>
    </linearGradient>
  </defs>
</svg>

 <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
  <g filter="url(#filter0_i_1_136)">
    <circle cx="28" cy="28" r="28" fill="url(#paint0_linear_1_136)"/>
  </g>
  <circle cx="28" cy="28" r="27.25" stroke="white" stroke-opacity="0.15" stroke-width="1.5"/>
  <defs>
    <filter id="filter0_i_1_136" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="9.96522"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_136"/>
    </filter>
    <linearGradient id="paint0_linear_1_136" x1="-3.13609" y1="-2.8903" x2="45.2498" y2="67.4683" gradientUnits="userSpaceOnUse">
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

            <div className='linefooter w-full'></div>

                

                <div className='mailboxx m-10 overflow-hidden w-96'>
                  <form
      onSubmit={handleSubmit}
      className="m-4"
    >
      {/* Input */}
      <input
        placeholder="Enter Your Email Address"
        className=" text-white outline-none "
       
      />

      <svg className="absolute left-83 top-46 " xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M1.09766 22.1025L23.5977 12.3525L1.09766 2.60254V10.1025L16.0977 12.3525L1.09766 14.6025V22.1025Z" fill="white"/>
</svg>

     
     
    </form>
                </div>
          

        </div>
    );
};

export default Footer;