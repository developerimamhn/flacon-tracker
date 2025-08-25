'use client';


import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);


gsap.registerPlugin(ScrollTrigger);

const HeroPage = () => {

  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animation for text elements
    gsap.from(textRef.current, {
      opacity: 0,
      x: -100,
      duration: 1.5,
      ease: 'power2.out',
    });

    // Animation for buttons
    gsap.from(buttonRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 0.5, // Delay to make the buttons appear after text animation
      ease: 'power2.out',
    });

    // Animation for image
    gsap.from(imageRef.current, {
      opacity: 0,
      x: 100,
      duration: 1.5,
      delay: 0.5,
      ease: 'power2.out',
    });
  }, []);


  const itemRefs = useRef([]);
  // GSAP animation effect
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
          duration: 1,
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


 const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const panels = gsap.utils.toArray(".panel");

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1), // move all panels horizontally
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true, // pin container while scrolling
        scrub: 1, // smooth scrubbing
        end: () => "+=" + container.offsetWidth, // scroll distance = width of container
      },
    });
  }, []);
  

    return (
        <div id="Home" ref={buttonRef} className='relative pb-[36px] sm:pb-[40px] md:pb-[48px] lg:pb-[64px] xl:pb-[96px] 2xl:pb-[113px] px-6 container mx-auto sm:px-0'>
          <div className='relative z-[2] '>
            <div className='pt-[100px] sm:pt-[140px] md:pt-[110px] lg:pt-[140px] xl:pt-[180px] 2xl:pt-[220px] sm:pb-0 pb-[50px] container mx-auto px-[24px] sm:px-0 w-full'>
                <div  className='flex items-center justify-center sm:flex-row flex-col'>
                  <div className="Frame14 flex flex-col justify-center sm:justify-start items-center sm:items-starts w-full col-span-1 sm:col-span-9">
                      <div  className='inline-flex flex-col w-full mt-[12px] sm:mt-[13px] md:mt-[14px] lg:mt-[15px] xl:mt-[16px] 2xl:mt-[20px]'>
                          <div  className="Frame13 self-stretch flex flex-col justify-center sm:justify-start items-center sm:items-start gap-[14px]  sm:gap-[16px] xl:gap-[24px]">
                              <h1 ref={containerRef} className="TradeLikeAProWithXonicCapital text-center sm:text-start text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[64px] 2xl:text-[76px] items-center justify-start relative lg:flex-row flex-col">
                              Get Custom Crypto <br className='sm:block hidden'/> Alerts and  <span className='befirst'>Be First <br className='sm:block hidden'/> to Spot Trending <br className='sm:block hidden'/> Tokens</span>
                             <svg xmlns="http://www.w3.org/2000/svg" className='absolute -bottom-17 left-[24%] w-[192px] -z-[1] xl:block hidden'  viewBox="0 0 192 189" fill="none">
                                <path d="M104.092 40.5159C103.653 40.7621 103.497 41.3175 103.743 41.7564C103.989 42.1954 104.545 42.3517 104.984 42.1056L104.092 40.5159ZM58.2531 116.573L57.3522 116.436L58.2531 116.573ZM63.5254 98.0701C63.3015 97.6194 62.7547 97.4355 62.304 97.6594L54.9591 101.308C54.5083 101.532 54.3245 102.079 54.5483 102.529C54.7722 102.98 55.3191 103.164 55.7698 102.94L62.2986 99.697L65.5416 106.226C65.7655 106.676 66.3124 106.86 66.7631 106.636C67.2138 106.413 67.3977 105.866 67.1738 105.415L63.5254 98.0701ZM127.131 38.6003L126.733 39.4199C134.403 43.1472 138.535 52.8679 138.684 66.033C138.831 79.1372 135.01 95.3548 127.139 111.55L127.959 111.949L128.778 112.347C136.746 95.9521 140.658 79.4551 140.506 66.0125C140.355 52.6307 136.155 41.9723 127.529 37.7807L127.131 38.6003ZM127.959 111.949L127.139 111.55C119.269 127.746 108.879 140.771 98.4842 148.752C88.0413 156.77 77.8449 159.527 70.1751 155.8L69.7768 156.62L69.3785 157.439C78.0037 161.631 88.9793 158.348 99.5941 150.198C110.257 142.011 120.811 128.742 128.778 112.347L127.959 111.949ZM104.538 41.3108L104.984 42.1056C113.083 37.5638 120.688 36.4823 126.733 39.4199L127.131 38.6003L127.529 37.7807C120.728 34.4754 112.455 35.8267 104.092 40.5159L104.538 41.3108ZM69.7768 156.62L70.1751 155.8C65.1953 153.38 61.7098 148.45 59.8301 141.648C57.9502 134.846 57.7056 126.256 59.1541 116.709L58.2531 116.573L57.3522 116.436C55.8781 126.151 56.1057 135.013 58.0735 142.134C60.0415 149.255 63.7791 154.718 69.3785 157.439L69.7768 156.62ZM58.2531 116.573L59.1541 116.709C60.021 110.996 61.4925 104.953 63.573 98.7659L62.7093 98.4755L61.8456 98.1851C59.7341 104.465 58.2362 110.61 57.3522 116.436L58.2531 116.573Z" fill="url(#paint0_linear_4_304)"/>
                                <path d="M88.3554 21.2306C97.2389 32.169 95.5731 48.2378 84.6347 57.1213C95.5731 48.2378 111.642 49.9036 120.525 60.842C111.642 49.9036 113.308 33.8348 124.246 24.9513C113.308 33.8348 97.2389 32.169 88.3554 21.2306Z" fill="url(#paint1_radial_4_304)"/>
                                <defs>
                                  <linearGradient id="paint0_linear_4_304" x1="51.1768" y1="115.989" x2="163.406" y2="108.19" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0.4"/>
                                    <stop offset="0.21784" stop-color="white"/>
                                    <stop offset="0.578937" stop-color="white" stop-opacity="0.44"/>
                                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                                  </linearGradient>
                                  <radialGradient id="paint1_radial_4_304" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(104.44 41.0363) rotate(50.9185) scale(29.5012)">
                                    <stop stop-color="white"/>
                                    <stop offset="1" stop-color="#353535"/>
                                  </radialGradient>
                                </defs>
                              </svg>
                              </h1>
                          </div>
                      </div>
                  </div>
                  
                </div>
               <div className="grid md:grid-cols-2  gap-10 mt-[80px] sm:mt-[80px] md:mt-[36px] lg:mt-[40px] xl:mt-[48px] 2xl:mt-[60px] justify-between items-end">
                  <div className='flex items-center justify-start gap-5 col-span-1'>
                  <h1 className="scrolldown">
                    Scroll <br /> Down
                  </h1>

                  <svg xmlns="http://www.w3.org/2000/svg" className='w-[57px] animate-bounce cursor-pointer' viewBox="0 0 57 71" fill="none">
                    <foreignObject x="-29.9971" y="-29.2524" width="116.278" height="129.337">
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{ backdropFilter: "blur(15px)", clipPath: "url(#bgblur_0_1_64_clip_path)", height: "100%", width: "100%" }}
                      />
                    </foreignObject>

                    <g data-figma-bg-blur-radius="30">
                      <rect x="0.00292969" y="0.747559" width="56.2781" height="69.337" rx="10" fill="white" fillOpacity="0.05" />
                      <rect x="0.50293" y="1.24756" width="55.2781" height="68.337" rx="9.5" stroke="white" strokeOpacity="0.6" />
                    </g>

                    <path
                      d="M35.4355 42.2542C35.7773 41.9124 36.332 41.9125 36.6738 42.2542C37.0156 42.596 37.0156 43.1506 36.6738 43.4924L28.7607 51.4045C28.4189 51.7464 27.8653 51.7464 27.5234 51.4045L19.6104 43.4924C19.2687 43.1506 19.2686 42.5959 19.6104 42.2542C19.9521 41.9124 20.5068 41.9125 20.8486 42.2542L28.1416 49.5481L35.4355 42.2542ZM35.4355 30.8401C35.7773 30.4985 36.332 30.4986 36.6738 30.8401C37.0156 31.1819 37.0155 31.7365 36.6738 32.0784L28.7607 39.9905C28.4189 40.3323 27.8653 40.3323 27.5234 39.9905L19.6104 32.0784C19.2688 31.7365 19.2686 31.1818 19.6104 30.8401C19.9521 30.4985 20.5068 30.4986 20.8486 30.8401L28.1416 38.134L35.4355 30.8401ZM35.4355 19.427C35.7774 19.0852 36.332 19.0852 36.6738 19.427C37.0156 19.7688 37.0156 20.3235 36.6738 20.6653L28.7607 28.5774C28.4189 28.919 27.8652 28.9191 27.5234 28.5774L19.6104 20.6653C19.2686 20.3235 19.2687 19.7688 19.6104 19.427C19.9522 19.0852 20.5068 19.0852 20.8486 19.427L28.1416 26.7209L35.4355 19.427Z"
                      fill="url(#paint0_linear_1_64)"
                    />

                    <defs>
                      <clipPath id="bgblur_0_1_64_clip_path" transform="translate(29.9971 29.2524)">
                        <rect x="0.00292969" y="0.747559" width="56.2781" height="69.337" rx="10" />
                      </clipPath>
                      <linearGradient id="paint0_linear_1_64" x1="28.1425" y1="19.1702" x2="28.1425" y2="51.6611" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0" />
                        <stop offset="1" stopColor="white" />
                      </linearGradient>
                    </defs>
                  </svg>
                  </div>
                  <div className='flex flex-col items-end min-h-[200px]' >
                    <div data-speed="0.3" className="backgroundcard flex  p-[32px] w-full 2xl:w-6/8 relative group transition-transform duration-300 ease-in-out hover:scale-102 z-50 col-span-1">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-[30px] absolute -top-[10px] -right-[10px] group-hover:-top-[20px] group-hover:-right-[20px] duration-200" 
                        viewBox="0 0 30 30" 
                        fill="none"
                      >
                        <path 
                          d="M0.643066 1V1C16.1834 1 28.7812 13.5979 28.7812 29.1382V29.1382" 
                          stroke="white" 
                          strokeWidth="2"
                        />
                      </svg>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-[30px] absolute -top-[10px] -left-[10px] group-hover:-top-[20px] group-hover:-left-[20px] duration-200" 
                        viewBox="0 0 30 30" 
                        fill="none"
                      >
                        <path 
                          d="M29.647 1V1C14.1067 1 1.50879 13.5979 1.50879 29.1382V29.1382" 
                          stroke="white" 
                          strokeWidth="2"
                        />
                      </svg>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-[30px] absolute -bottom-[10px] -left-[10px] group-hover:-bottom-[20px] group-hover:-left-[20px] duration-200" 
                        viewBox="0 0 30 31" 
                        fill="none"
                      >
                        <path 
                          d="M29.647 29.0845V29.0845C14.1067 29.0845 1.50879 16.4866 1.50879 0.946289V0.946289" 
                          stroke="white" 
                          strokeWidth="2"
                        />
                      </svg>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-[30px] absolute -bottom-[10px] -right-[10px] group-hover:-bottom-[20px] group-hover:-right-[20px] duration-200" 
                        viewBox="0 0 30 31" 
                        fill="none"
                      >
                        <path 
                          d="M0.643066 29.0845V29.0845C16.1834 29.0845 28.7812 16.4866 28.7812 0.946289V0.946289" 
                          stroke="white" 
                          strokeWidth="2"
                        />
                      </svg>

                      <div className="">
                        <div className="">
                        
                          <div className=" falconfont whitespace-normal ">
                            <p className="whitespace-normal">
                              Flacon Tracker Is A Multi-Chain Telegram
                              Bot That Tracks Token Launches Across  
                              Blockchains, Helping You Spot Trending
                                Projects Early.
                            </p>
                          </div>
                          {/* Button */}
                          <div className="mt-6 flex justify-center">
                            <button className="getstarted w-full">
                              <span className='getstratxt'>Get Started</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                              <g filter="url(#filter0_i_1_162)">
                              <circle cx="23.2297" cy="23.0422" r="23.0422" fill="#E8423A"/>
                              </g>
                                <path d="M14.5752 21.7922C13.8848 21.7922 13.3252 22.3518 13.3252 23.0422C13.3252 23.7325 13.8848 24.2922 14.5752 24.2922V23.0422V21.7922ZM32.7689 23.9261C33.257 23.4379 33.257 22.6464 32.7689 22.1583L24.8139 14.2033C24.3258 13.7152 23.5343 13.7152 23.0461 14.2033C22.558 14.6915 22.558 15.483 23.0461 15.9711L30.1172 23.0422L23.0461 30.1132C22.558 30.6014 22.558 31.3929 23.0461 31.881C23.5343 32.3692 24.3258 32.3692 24.8139 31.881L32.7689 23.9261ZM14.5752 23.0422V24.2922H31.885V23.0422V21.7922H14.5752V23.0422Z" fill="white"/>
                              <defs>
                            <filter id="filter0_i_1_162" x="0.1875" y="0" width="46.084" height="46.0845" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                              <feOffset/>
                              <feGaussianBlur stdDeviation="9.96522"/>
                              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
                              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_162"/>
                              </filter>
                            </defs>
                            </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>
    );
};

export default HeroPage;