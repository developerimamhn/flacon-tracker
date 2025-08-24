'use client'


import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import logo from "./image/logo.png";
import image11 from "./image/image11.png";
import image12 from "./image/image12.png";
import image13 from "./image/image13.png";







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
        <div className='relative overflow-hidden'>
          <svg className="w-[40%] absolute left-0 top-0" viewBox="0 0 1040 987" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_4_13)">
          <ellipse cx="163.921" cy="169.252" rx="354.133" ry="134.789" transform="rotate(36.5717 163.921 169.252)" fill="#D9D9D9" fill-opacity="0.36"/>
          </g>
          <defs>
          <filter id="filter0_f_4_13" x="-711.984" y="-648.248" width="1751.81" height="1635" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="290.15" result="effect1_foregroundBlur_4_13"/>
          </filter>
          </defs>
          </svg>
          <svg className="w-[40%] absolute right-0 bottom-0" viewBox="0 0 962 1556" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_4_14)">
          <ellipse cx="836.712" cy="778.416" rx="354.133" ry="134.789" transform="rotate(36.5717 836.712 778.416)" fill="#D9D9D9" fill-opacity="0.36"/>
          </g>
          <defs>
          <filter id="filter0_f_4_14" x="0.805847" y="0.915527" width="1671.81" height="1555" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="270.15" result="effect1_foregroundBlur_4_14"/>
          </filter>
          </defs>
          </svg>

          <div className=''>
            <div className='flex pt-[24px] sm:pt-[32px] md:pt-[36px] lg:pt-[40px] xl:pt-[48px] 2xl:pt-[63px] pb-[20px] sm:pb-[24px] md:pb-[32px] lg:pb-[36px] xl:pb-[40px] 2xl:pb-[50px] justify-between items-center container mx-auto md:flex-row flex-col gap-5'>
              <div className='flex items-center'>
                  <Image className='w-full h-[28px] sm:h-[37px] 2xl:h-[55.3px]' src={logo} alt=''/>
              </div>
                <div>
                  <nav className='flex items-center gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[32px] sm:flex-row flex-col'>
                      <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Home" onClick={(e) => handleScroll(e, "Home")}>
                      Home</a>
                          <svg xmlns="http://www.w3.org/2000/svg" className='w-[2px] sm:block hidden' viewBox="0 0 2 15" fill="none">
                          <path opacity="0.25" d="M1.36133 0.0492096L1.36133 14.9508" stroke="white"/>
                          </svg>
                      <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Features" onClick={(e) => handleScroll(e, "Features")}>
                      Features </a>
                          <svg xmlns="http://www.w3.org/2000/svg" className='w-[2px] sm:block hidden' viewBox="0 0 2 15" fill="none">
                          <path opacity="0.25" d="M1.36133 0.0492096L1.36133 14.9508" stroke="white"/>
                          </svg>

                      <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#How It Works" onClick={(e) => handleScroll(e, "How It Works")}>
                      How It Works</a>
                          <svg xmlns="http://www.w3.org/2000/svg" className='w-[2px] sm:block hidden' viewBox="0 0 2 15" fill="none">
                          <path opacity="0.25" d="M1.36133 0.0492096L1.36133 14.9508" stroke="white"/>
                          </svg>
                      
                      <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Roadmap" onClick={(e) => handleScroll(e, "Roadmap")}>
                      Roadmap</a>

                      <ul className='sm:hidden block'>
                        <button className='buttonaudit cursor-pointer flex items-center h-[36px] md:h-[40px] lg:h-[44px] xl:h-[48px] 2xl:h-[54px] px-[15px] sm:px-[16px] md:px-[20px] lg:px-[24px] xl:px-[28px] 2xl:px-[30px] group gap-[7.50px] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px]'>
                        Contact
                        </button>
                      </ul>
                  </nav>
                </div>

                <div className='flex gap-[16px] items-center'>
                   <svg className='w-[34px] md:w-[45px] xl:w-[56px] cursor-pointer' width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_i_4_149)">
                    <circle cx="28" cy="28" r="28" fill="url(#paint0_linear_4_149)"/>
                    </g>
                    <circle cx="28" cy="28" r="27.1787" stroke="white" stroke-opacity="0.15" stroke-width="1.64262"/>
                    <g opacity="0.9">
                    <path d="M33.5334 19.3667H36.4625L30.0633 26.6805L37.5914 36.633H31.697L27.0803 30.5969L21.7977 36.633H18.8668L25.7114 28.81L18.4896 19.3667H24.5337L28.7068 24.8839L33.5334 19.3667ZM32.5054 34.8798H34.1284L23.6518 21.0278H21.9101L32.5054 34.8798Z" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_i_4_149" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="9.96522"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_4_149"/>
                    </filter>
                    <linearGradient id="paint0_linear_4_149" x1="-3.13609" y1="-2.8903" x2="45.2498" y2="67.4683" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#303030"/>
                    <stop offset="0.188894" stop-color="#141414"/>
                    <stop offset="0.288395" stop-color="#0F0F0F"/>
                    <stop offset="0.759772" stop-color="#0E0E0E"/>
                    <stop offset="0.815517" stop-color="#131313"/>
                    <stop offset="1" stop-color="#303030"/>
                    </linearGradient>
                    </defs>
                    </svg>

                    <svg className='w-[34px] md:w-[45px] xl:w-[56px] cursor-pointer' viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_i_4_145)">
                    <circle cx="28" cy="28" r="28" fill="url(#paint0_linear_4_145)"/>
                    </g>
                    <circle cx="28" cy="28" r="27.25" stroke="white" stroke-opacity="0.15" stroke-width="1.5"/>
                    <g opacity="0.9">
                    <path d="M36.665 19.7168L18.935 26.5538C17.725 27.0398 17.732 27.7148 18.713 28.0158L23.265 29.4358L33.797 22.7908C34.295 22.4878 34.75 22.6508 34.376 22.9828L25.843 30.6838H25.841L25.843 30.6848L25.529 35.3768C25.989 35.3768 26.192 35.1658 26.45 34.9168L28.661 32.7668L33.26 36.1638C34.108 36.6308 34.717 36.3908 34.928 35.3788L37.947 21.1508C38.256 19.9118 37.474 19.3508 36.665 19.7168Z" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_i_4_145" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="9.96522"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_4_145"/>
                    </filter>
                    <linearGradient id="paint0_linear_4_145" x1="-3.13609" y1="-2.8903" x2="45.2498" y2="67.4683" gradientUnits="userSpaceOnUse">
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

                
         <div className='flex justify-between container mx-auto pt-[16px] sm:pt-[20px] md:pt-[24px] lg:pt-[32px] xl:pt-[36px] 2xl:pt-[40px] pb-[20px] sm:pb-[24px] md:pb-[32px] lg:pb-[36px] xl:pb-[40px] 2xl:pb-[48px] items-center sm:flex-row flex-col gap-4'>
               <div className='mailboxx  flex itesm-center' onSubmit={handleSubmit}>
                 <input
                  placeholder="Enter Your Email Address"
                  className="enteremail outline-none pr-[24px] sm:pr-[32px] md:pr-[36px] lg:pr-[40px] xl:pr-[48px] 2xl:pr-[64px] pl-[12px] sm:pl-[13px] md:pl-[14px] lg:pl-[15px] xl:pl-[16px] 2xl:pl-[20px] border-none text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] "
               />
               <button className='cursor-pointer' type='submit'>
                <svg className='w-[40px] sm:w-[56px]' viewBox="0 0 56 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_i_2029_50)">
                  <path d="M0.912842 0.569824H42.7815C49.9612 0.569824 55.7815 6.39012 55.7815 13.5698V45.1356C55.7815 52.3153 49.9612 58.1356 42.7815 58.1356H0.912842V0.569824Z" fill="#E8423A"/>
                  </g>
                  <path d="M42.782 1.39111C49.5079 1.39138 54.9597 6.84388 54.9597 13.5698V45.1353C54.9597 51.8612 49.5079 57.3137 42.782 57.314H1.73413V1.39111H42.782Z" stroke="white" stroke-opacity="0.05" stroke-width="1.64262"/>
                  <path d="M17.0972 39.1025L39.5972 29.3525L17.0972 19.6025V27.1025L32.0972 29.3525L17.0972 31.6025V39.1025Z" fill="white"/>
                  <defs>
                  <filter id="filter0_i_2029_50" x="0.912842" y="0.569824" width="54.8687" height="57.5659" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="9.96522"/>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2029_50"/>
                  </filter>
                  </defs>
                </svg>
              </button>
              </div>
                  <div className='flex duration-1000 z-[999] sm:opacity-100 sm:justify-between items-start sm:items-center gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[32px]'>
                     <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]">
                    Support</a>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-[2px] sm:block hidden' viewBox="0 0 2 15" fill="none">
                        <path opacity="0.25" d="M1.36133 0.0492096L1.36133 14.9508" stroke="white"/>
                        </svg>
                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]">
                    Privacy policy </a>
                        

                   </div>
             </div>      
          </div>
        </div>
      </div>
    );
};

export default Footer;