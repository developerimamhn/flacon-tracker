"use client";


import React,{useEffect,useState,useRef} from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Image from 'next/image';






const Pagefive = () => {



      // hhsvs



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
        <div></div>
    );
};

export default Pagefive;