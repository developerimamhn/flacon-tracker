'use client';

import { useEffect, useRef } from "react";
import NavBar from './NavBar';
import HeroPage from './HeroPage';

import Image from 'next/image';
import { gsap } from "gsap";    


const Header = () => {
    const svgRef = useRef(null);

    useEffect(() => {
      // Ensure GSAP runs only on the client-side
      if (typeof window === "undefined") return;
  
      const svg = svgRef.current;
      if (!svg) return; // Guard against null ref
  
      // Target SVG elements directly with querySelectorAll
      const verticalLines = svg.querySelectorAll(".vertical-lines path");
      const horizontalLines = svg.querySelectorAll(".horizontal-lines path");
      const rectangles = svg.querySelectorAll(".rect-1, .rect-2, .rect-3");
      const highlightLines = svg.querySelectorAll(
        ".highlight-line, .vertical-highlight"
      );
  
      // Animate vertical lines
      gsap.from(verticalLines, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.1,
      });
  
      // Animate horizontal lines
      gsap.from(horizontalLines, {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.5,
      });
  
      // Animate rectangles
      gsap.from(rectangles, {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.3,
        delay: 1,
      });
  
      // Animate highlight lines
      gsap.fromTo(
        highlightLines,
        { opacity: 0.5 },
        {
          opacity: 1,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.2,
          delay: 1.5,
        }
      );
    }, []);
    return (
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
         

            <NavBar/>
            <HeroPage/>
        </div>
    );
};

export default Header;