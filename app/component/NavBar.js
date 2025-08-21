"use client";


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import logo from './image/logo.png';
import righticon from './image/righticon.png';


const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);
    const [scrolled, setScrolled] = useState(false); // For background styling
    const [isVisible, setIsVisible] = useState(true); // For show/hide
    const [prevScrollPos, setPrevScrollPos] = useState(0); // Tracks scroll direction

    // Handle clicks outside to close the menu
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

    // Smooth scroll to section
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

    // Scroll logic for show/hide and background change
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            // Update scrolled state for background styling
            if (currentScrollPos > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Show/hide navbar based on scroll direction
            if (currentScrollPos < 50) {
                setIsVisible(true); // Show near the top
            } else if (currentScrollPos > prevScrollPos) {
                setIsVisible(false); // Hide when scrolling down
            } else {
                setIsVisible(true); // Show when scrolling up
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    const handleScrollToTop   = (e, targetId) => {
        e.preventDefault();
        if (targetId === "") {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
      

    return (
        <div className={` header ${scrolled ? "scrolled" : " "}  w-full header backgronsdvg  ${
            isVisible ? "translate-y-0 transition-transform duration-300" : "-translate-y-full transition-transform duration-300"
        }`}>
            
            <header className='px-[24px] sm:px-0 container mx-auto  flex justify-between items-center p-[11px] sm:p-[12px] md:p-[13px] lg:p-[14px] xl:p-[15px] 2xl:p-[16px] relative  sm:overflow-hidden positasdeinasa mt-[16px] sm:mt-[20px] md:mt-[24px] lg:mt-[32px] xl:mt-[36px] 2xl:mt-[40px] mb-4'>
            <dev className='linersext absolute bottom-0 left-0 w-full h-[2px] z-10'></dev>
                <div className='sm:hidden relative top-[-11px]'>
                    
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-white text-[24px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-white text-[24px] absolute' />
                    </div>
                </div>
                <Link onClick={(e) => handleScrollToTop(e, "")} href='/' className='cursor-pointer flex items-center Froggo-Logo h-[20px] sm:h-[24px] 2xl:h-[28px]'>
                <Image className='w-full h-[28px] sm:h-[37px] 2xl:h-[55.3px]' src={logo} alt=''/></Link>

                <nav ref={menuRef} className={`navbar-items-main absolute sm:top-0 top-[100%] sm:left-0 sm:relative duration-1000 z-[999] sm:opacity-100 flex justif-start sm:justify-between items-start sm:items-center gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[32px] sm:bg-transparent bg-[#000000] sm:flex-row flex-col w-full sm:w-fit h-screen sm:h-full ml-auto mr-[14px] sm:mr-[15px] md:mr-[16px] lg:mr-[20px] xl:mr-[24px] 2xl:mr-[32px] sm:p-0 p-6
                    ${toggle ? 'left-[0]' :'left-[120%]' }
                    ${toggle ? 'opacity-100' : 'opacity-10'} 
                    `} >
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
                    Download
                    </button>
                </ul>
                </nav>
                
                <ul className='sm:block hidden'>
                    <button className='buttonaudit cursor-pointer text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[14.1px] flex items-center h-[36px] md:h-[40px] lg:h-[44px] xl:h-[48px] 2xl:h-[54px] px-[15px] sm:px-[16px] md:px-[20px] lg:px-[24px] xl:px-[28px] 2xl:px-[30px] group gap-[7.50px]'>
                    Download
                    </button>
                </ul>
                
                
            </header>
            <div className='navbarunderborder'></div>
        </div>
    );
};

export default NavBar;