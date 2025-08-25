'use client';

import React, { useEffect, useRef,useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import numbeingss from './image/slide7.png';
import linerone from './image/linerone.svg';
import Image from 'next/image';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import Crxconving from './Crxconving';

gsap.registerPlugin(ScrollTrigger);



const Pagethree = () => {
    const handleLinkClick = (href) => {
        setActiveLink(href); 
    };


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



  // avzd


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
              duration: 2,
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
        <div id='Roadmap' className=' w-full relative md:pb-0 pb-[24px]'>
          <svg className='w-[40%] absolute right-0 -top-1/4 lg:block hidden' viewBox="0 0 723 1273" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_2050_570)">
<ellipse cx="672.575" cy="636.891" rx="249.734" ry="117.467" transform="rotate(36.5717 672.575 636.891)" fill="#D9D9D9" fill-opacity="0.32"/>
</g>
<g opacity="0.2">
<path fill-rule="evenodd" clip-rule="evenodd" d="M627.465 664.633C682.156 733.018 784.31 742.299 857.779 683.542C931.247 624.786 944.649 523.091 889.958 454.706C881.431 444.044 815.758 482.395 743.272 540.365C670.787 598.335 618.939 653.972 627.465 664.633ZM691.628 706.996C743.24 727.738 805.878 719.774 855.205 680.325C904.533 640.875 926.07 581.52 917.18 526.611C920.249 577.13 895.822 632.016 847.486 670.672C799.15 709.329 740.237 721.094 691.628 706.996ZM844.913 667.455C794.353 707.89 732.291 718.053 683.438 699.696C729.589 711.352 787.935 697.196 837.193 657.802C886.451 618.408 913.086 564.6 911.859 517.016C919.029 568.71 895.472 627.02 844.913 667.455ZM675.343 692.73C721.175 708.656 782.656 696.143 834.62 654.585C886.584 613.027 912.305 555.8 906.843 507.588C906.671 519.861 904.339 532.757 900.003 545.822C888.633 580.085 863.447 615.705 826.901 644.932C790.354 674.16 750.069 690.901 714.145 694.462C700.447 695.819 687.354 695.26 675.343 692.73ZM714.009 690.243C697.129 691.916 681.351 690.585 667.527 686.233C679.478 688.15 692.851 687.806 707.03 685.339C741.044 679.421 780.116 661.247 816.608 632.063C853.1 602.878 879.418 568.756 892.668 536.876C898.191 523.585 901.466 510.615 902.223 498.535C903.43 512.978 901.26 528.662 895.917 544.762C884.863 578.075 860.266 612.973 824.327 641.715C788.388 670.457 748.937 686.781 714.009 690.243ZM660.24 680.273C673.489 683.896 689.255 684.177 706.568 681.164C739.682 675.403 778.041 657.631 814.035 628.845C850.028 600.059 875.797 566.544 888.697 535.507C895.441 519.28 898.633 503.838 898.01 490.116C896.539 501.752 892.155 514.597 885.313 527.94C870.194 557.425 842.755 590.05 806.315 619.193C769.875 648.336 732.017 667.932 699.929 676.2C685.409 679.942 671.914 681.395 660.24 680.273ZM699.113 672.102C681.377 676.673 665.791 677.616 653.413 674.878C664.495 675.03 677.93 672.289 692.841 667.042C722.989 656.436 759.631 635.427 796.022 606.323C832.414 577.219 860.963 546.09 877.937 519.012C886.333 505.618 891.96 493.115 894.249 482.27C894.198 494.947 889.852 509.945 881.495 526.242C866.74 555.017 839.787 587.148 803.742 615.975C767.697 644.802 730.427 664.033 699.113 672.102ZM647.091 670.119C649.077 670.418 651.198 670.59 653.449 670.633C663.88 670.833 676.873 668.257 691.645 663.06C721.174 652.67 757.356 631.971 793.449 603.105C829.543 574.24 857.689 543.493 874.315 516.97C882.632 503.701 888.002 491.592 890.099 481.373C890.552 479.167 890.85 477.06 890.995 475.057C890.755 475.782 890.495 476.516 890.216 477.257C886.704 486.583 879.933 497.767 870.538 510.087C851.727 534.753 822.076 564.385 785.73 593.453C749.383 622.521 713.959 644.933 685.761 657.862C671.677 664.32 659.278 668.466 649.409 669.842C648.624 669.952 647.851 670.044 647.091 670.119ZM649.096 665.644C644.593 666.272 640.88 666.252 637.919 665.664C660.799 660.261 715.224 626.101 774.151 578.974C833.077 531.848 878.365 486.263 888.665 465.13C888.589 468.148 887.792 471.774 886.189 476.03C882.899 484.767 876.426 495.542 867.158 507.694C848.644 531.971 819.295 561.333 783.157 590.235C747.018 619.137 711.923 641.314 684.169 654.039C670.278 660.409 658.343 664.355 649.096 665.644ZM884.107 457.182C885.804 457.095 886.374 457.389 886.498 457.472C886.551 457.612 886.714 458.232 886.256 459.869C885.68 461.924 884.331 464.771 882.035 468.42C877.471 475.675 869.755 485.19 859.353 496.352C838.597 518.625 807.697 546.87 771.577 575.757C735.457 604.644 701.111 628.579 674.821 643.932C661.645 651.626 650.667 657.061 642.586 659.919C638.521 661.356 635.447 662.047 633.316 662.157C631.619 662.244 631.049 661.949 630.925 661.867C630.872 661.727 630.709 661.106 631.167 659.47C631.743 657.415 633.092 654.568 635.388 650.919C639.952 643.664 647.668 634.149 658.07 622.987C678.826 600.714 709.726 572.469 745.846 543.582C781.966 514.695 816.312 490.76 842.602 475.407C855.778 467.713 866.756 462.278 874.837 459.42C878.902 457.983 881.976 457.292 884.107 457.182Z" fill="url(#paint0_linear_2050_570)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M611.83 645.083C557.139 576.698 570.54 475.003 644.009 416.246C717.478 357.49 819.631 366.77 874.322 435.155C882.849 445.817 831 501.454 758.515 559.424C686.03 617.394 620.357 655.744 611.83 645.083ZM584.608 573.177C575.718 518.268 597.255 458.913 646.582 419.464C695.91 380.014 758.548 372.05 810.159 392.793C761.55 378.694 702.638 390.459 654.302 429.116C605.966 467.772 581.539 522.658 584.608 573.177ZM656.875 432.333C606.316 472.768 582.758 531.078 589.929 582.772C588.702 535.188 615.337 481.38 664.595 441.986C713.852 402.592 772.199 388.436 818.35 400.093C769.497 381.735 707.435 391.899 656.875 432.333ZM594.945 592.2C589.483 543.988 615.204 486.761 667.168 445.203C719.132 403.645 780.612 391.133 826.445 407.059C814.434 404.529 801.341 403.969 787.642 405.327C751.718 408.887 711.434 425.628 674.887 454.856C638.341 484.084 613.154 519.703 601.785 553.966C597.449 567.031 595.117 579.927 594.945 592.2ZM605.87 555.027C600.528 571.126 598.357 586.811 599.565 601.253C600.322 589.173 603.596 576.203 609.12 562.913C622.37 531.032 648.688 496.91 685.18 467.726C721.672 438.541 760.744 420.368 794.758 414.449C808.937 411.982 822.309 411.638 834.261 413.555C820.437 409.203 804.659 407.873 787.779 409.546C752.851 413.007 713.399 429.331 677.46 458.073C641.521 486.815 616.925 521.714 605.87 555.027ZM603.778 609.672C603.155 595.95 606.347 580.508 613.091 564.281C625.99 533.244 651.76 499.729 687.753 470.943C723.747 442.157 762.106 424.385 795.22 418.624C812.532 415.611 828.298 415.892 841.548 419.516C829.873 418.393 816.378 419.846 801.858 423.588C769.771 431.856 731.913 451.453 695.473 480.596C659.032 509.739 631.594 542.363 616.474 571.848C609.633 585.191 605.249 598.036 603.778 609.672ZM620.293 573.546C611.936 589.844 607.589 604.841 607.539 617.518C609.827 606.673 615.455 594.17 623.85 580.777C640.825 553.698 669.374 522.57 705.765 493.465C742.157 464.361 778.799 443.353 808.947 432.746C823.858 427.5 837.293 424.758 848.375 424.91C835.997 422.172 820.411 423.116 802.675 427.686C771.361 435.755 734.091 454.986 698.046 483.813C662.001 512.64 635.048 544.771 620.293 573.546ZM610.793 624.731C610.938 622.728 611.236 620.622 611.689 618.416C613.786 608.196 619.156 596.087 627.473 582.819C644.099 556.296 672.245 525.549 708.338 496.683C744.432 467.817 780.614 447.118 810.143 436.729C824.915 431.531 837.908 428.955 848.339 429.155C850.59 429.198 852.711 429.37 854.697 429.67C853.937 429.744 853.164 429.837 852.379 429.946C842.51 431.322 830.111 435.469 816.027 441.926C787.829 454.855 752.404 477.267 716.058 506.335C679.712 535.403 650.061 565.035 631.25 589.702C621.854 602.022 615.084 613.206 611.572 622.531C611.293 623.272 611.033 624.006 610.793 624.731ZM615.599 623.759C613.996 628.014 613.199 631.641 613.123 634.658C623.422 613.525 668.711 567.94 727.637 520.814C786.564 473.688 840.988 439.527 863.868 434.124C860.908 433.536 857.195 433.516 852.692 434.144C843.445 435.433 831.51 439.38 817.618 445.749C789.865 458.474 754.77 480.651 718.631 509.553C682.492 538.455 653.144 567.817 634.629 592.094C625.362 604.246 618.889 615.022 615.599 623.759ZM870.62 440.318C871.078 438.682 870.916 438.061 870.863 437.922C870.738 437.839 870.169 437.544 868.472 437.632C866.34 437.741 863.267 438.432 859.202 439.869C851.121 442.727 840.143 448.162 826.967 455.856C800.676 471.209 766.33 495.145 730.21 524.031C694.091 552.918 663.191 581.163 642.435 603.436C632.032 614.599 624.317 624.113 619.753 631.368C617.457 635.018 616.108 637.864 615.532 639.92C615.074 641.556 615.236 642.176 615.29 642.316C615.414 642.399 615.984 642.693 617.681 642.606C619.812 642.497 622.886 641.806 626.951 640.368C635.032 637.511 646.009 632.075 659.185 624.381C685.476 609.028 719.822 585.093 755.942 556.206C792.062 527.319 822.962 499.074 843.718 476.801C854.12 465.639 861.835 456.124 866.399 448.87C868.695 445.22 870.045 442.373 870.62 440.318Z" fill="url(#paint1_linear_2050_570)"/>
</g>
<defs>
<filter id="filter0_f_2050_570" x="0.206909" y="0.799683" width="1344.74" height="1272.18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="229.942" result="effect1_foregroundBlur_2050_570"/>
</filter>
<linearGradient id="paint0_linear_2050_570" x1="871.702" y1="684.442" x2="737.412" y2="534.02" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_2050_570" x1="624.085" y1="394.816" x2="763.72" y2="566.408" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
          </svg>

          <h1 className='p3roadmp text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[60px] pb-[32px] sm:pb-[36px] md:pb-[40px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[86px] pt-[35px] sm:pt-[50px] md:pt-[80px] lg:pt-[110px] xl:pt-[140px] 2xl:pt-[185px] relative'>Roadmap
            <svg className='absolute top-[37%] left-[37.5%] xl:block hidden' xmlns="http://www.w3.org/2000/svg" width="201" height="189" viewBox="0 0 201 189" fill="none">
                <path d="M77.1411 148.464C77.6701 148.324 77.9851 147.781 77.8447 147.252C77.7043 146.723 77.1617 146.408 76.6327 146.548L76.8869 147.506L77.1411 148.464ZM146.011 80.7718L145.099 80.3839L146.011 80.7718ZM135.449 98.8312C135.563 99.3665 136.089 99.7083 136.624 99.5945L145.348 97.7406C145.883 97.6269 146.225 97.1007 146.111 96.5654C145.997 96.0301 145.471 95.6883 144.936 95.8021L137.181 97.45L135.534 89.6958C135.42 89.1605 134.894 88.8188 134.358 88.9325C133.823 89.0463 133.481 89.5725 133.595 90.1078L135.449 98.8312ZM52.358 144.244L52.9994 143.488C45.9306 137.486 44.2102 126.13 47.6182 112.224C51.0104 98.3825 59.4263 82.3368 72.1005 67.4107L71.3451 66.7693L70.5898 66.1279C57.7597 81.2377 49.1731 97.5532 45.6933 111.752C42.2293 125.887 43.7674 138.249 51.7166 144.999L52.358 144.244ZM71.3451 66.7693L72.1005 67.4107C84.7746 52.4846 99.2438 41.5789 112.352 35.9878C125.522 30.3707 137.007 30.2274 144.076 36.2297L144.717 35.4743L145.358 34.719C137.409 27.9691 124.961 28.4554 111.575 34.1649C98.1277 39.9003 83.4199 51.0182 70.5898 66.1279L71.3451 66.7693ZM76.8869 147.506L76.6327 146.548C66.8723 149.139 58.5704 148.219 52.9994 143.488L52.358 144.244L51.7166 144.999C57.985 150.322 67.0637 151.138 77.1411 148.464L76.8869 147.506ZM144.717 35.4743L144.076 36.2297C148.665 40.1267 151.001 46.2627 151.139 53.9351C151.278 61.6084 149.209 70.722 145.099 80.3839L146.011 80.7718L146.923 81.1597C151.106 71.3271 153.266 61.9314 153.121 53.8994C152.976 45.8664 150.519 39.1009 145.358 34.719L144.717 35.4743ZM146.011 80.7718L145.099 80.3839C142.639 86.1666 139.453 92.1323 135.587 98.0855L136.418 98.6252L137.249 99.165C141.173 93.123 144.415 87.056 146.923 81.1597L146.011 80.7718Z" fill="url(#paint0_linear_1_285)"/>
                <path d="M88.4937 173.036C82.0991 159.111 88.2041 142.638 102.13 136.243C88.2041 142.638 71.7315 136.533 65.3369 122.607C71.7315 136.533 65.6264 153.006 51.701 159.4C65.6264 153.006 82.0991 159.111 88.4937 173.036Z" fill="url(#paint1_radial_1_285)"/>
                <defs>
                  <linearGradient id="paint0_linear_1_285" x1="153.306" y1="83.3024" x2="32.9947" y2="61.131" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" stop-opacity="0.4"/>
                    <stop offset="0.21784" stop-color="white"/>
                    <stop offset="0.578937" stop-color="white" stop-opacity="0.44"/>
                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                  </linearGradient>
                  <radialGradient id="paint1_radial_1_285" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76.9153 147.822) rotate(-114.665) scale(32.0809)">
                    <stop stop-color="white"/>
                    <stop offset="1" stop-color="#353535"/>
                  </radialGradient>
                </defs>
            </svg>
          </h1>
          
            <div className='relative px-6 lg:px-0 lg:block grid grid-cols-1 sm:grid-cols-2 gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[32px]'>
              <div className="lg:absolute lg:-top-[36%] xl:-top-[35%] 2xl:-top-[29%] left-[14%]">
                <div className='relaive p-[15px] sm:p-[16px] md:p-[20px] lg:p-[24px] xl:p-[32px] 2xl:p-[36px] p3card'>
                  <h3 className="q42021 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[32px]">Q4 2024</h3>
                  <p className="expantion mt-[12px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[22px]">Expansion of Multi-Chain Support</p>
                  <p className="addingsu mt-[12px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]">Adding support for additional <br/> blockchains to enhance tracking <br/>capabilities</p>
                  <Image className='w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[92px] absolute -left-[14.5%] xl:-left-[14%] 2xl:-left-[20%] top-1/2 lg:block hidden' src={numbeingss} alt='Loading...' />
                </div>
              </div>
              <div className="lg:absolute lg:-top-[15%] xl:-top-[15%] 2xl:-top-[14%] left-[50%]">
                <div className='relaive p-[15px] sm:p-[16px] md:p-[20px] lg:p-[24px] xl:p-[32px] 2xl:p-[36px] p3card'>
                  <h3 className="q42021 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[32px]">Q4 2024</h3>
                  <p className="expantion mt-[12px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[22px]">Expansion of Multi-Chain Support</p>
                  <p className="addingsu mt-[12px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]">Adding support for additional <br/> blockchains to enhance tracking <br/>capabilities</p>
                  <Image className='w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[92px] absolute -left-[14.5%] xl:-left-[14%] 2xl:-left-[20%] top-1/2 lg:block hidden' src={numbeingss} alt='Loading...' />
                </div>
              </div>
              <div className="lg:absolute bottom-[35%] right-[8%] xl:right-[9%] 2xl:right-[5%]">
                <div className='relaive p-[15px] sm:p-[16px] md:p-[20px] lg:p-[24px] xl:p-[32px] 2xl:p-[36px] p3card'>
                  <h3 className="q42021 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[32px]">Q4 2024</h3>
                  <p className="expantion mt-[12px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[22px]">Expansion of Multi-Chain Support</p>
                  <p className="addingsu mt-[12px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]">Adding support for additional <br/> blockchains to enhance tracking <br/>capabilities</p>
                  <Image className='w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[92px] absolute -left-[14.5%] xl:-left-[14%] 2xl:-left-[20%] top-1/2 lg:block hidden' src={numbeingss} alt='Loading...' />
                </div>
              </div>
              <svg className='w-full mt-[220px] xl:mt-[250px] 2xl:mt-[380px] pr-[236px] lg:block hidden' viewBox="0 0 1493 925" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.1" filter="url(#filter0_fg_2038_563)">
              <path d="M113.198 129.974L241.435 178.36C259.273 185.091 275.269 195.941 288.117 210.027L425.559 360.71C445.558 382.636 472.917 396.447 502.435 399.519L672.611 417.224C702.835 420.369 730.769 434.77 750.862 457.565L850.645 570.771C863.08 584.88 878.633 595.895 896.069 602.943L1290.66 762.451" stroke="url(#paint0_linear_2038_563)" stroke-opacity="0.5" stroke-width="75" stroke-linecap="round"/>
              </g>
              <path d="M903.782 328.855C903.782 325.833 906.702 323.67 909.593 324.55L1026.14 360.028C1028.03 360.605 1029.33 362.353 1029.33 364.333V715.567C1029.33 718.052 1027.31 720.067 1024.83 720.067H908.282C905.797 720.067 903.782 718.052 903.782 715.567V328.855Z" fill="url(#paint1_linear_2038_563)" stroke="url(#paint2_linear_2038_563)"/>
              <path d="M179.65 116.985C179.65 114.227 182.109 112.117 184.835 112.537L301.38 130.462C303.575 130.8 305.196 132.689 305.196 134.91V336.694C305.196 339.179 303.181 341.194 300.696 341.194H184.15C181.665 341.194 179.65 339.179 179.65 336.694V116.985Z" fill="url(#paint3_linear_2038_563)" stroke="url(#paint4_linear_2038_563)"/>
              <path d="M601.187 217.646C601.187 214.889 603.646 212.779 606.372 213.198L722.917 231.124C725.113 231.462 726.733 233.35 726.733 235.571V427.392C726.733 429.877 724.718 431.891 722.233 431.892H605.687C603.202 431.892 601.187 429.877 601.187 427.392V217.646Z" fill="url(#paint5_linear_2038_563)" stroke="url(#paint6_linear_2038_563)"/>
              <path d="M930.484 378.907C671.939 170.832 222.74 104.672 0.727295 96.8818V0C733.182 24.8574 1170.58 285.5 1264.22 397.044C1439.73 565.186 1489.28 831.295 1492.12 924.643H645.952C683.812 896.708 758.651 838.382 766.066 831.501C882.597 747.091 948.783 665.268 967.309 634.908C1074.87 477.122 939.266 385.974 930.484 378.907Z" fill="url(#paint7_linear_2038_563)"/>
              <path d="M1.72729 1.03516C367.36 13.5592 659.361 84.8543 871.667 166.947C1084.22 249.135 1216.79 342.106 1263.45 397.687L1263.49 397.729L1263.53 397.766C1351.13 481.692 1407.33 590.1 1441.98 689.222C1476.37 787.619 1489.51 876.793 1491.09 923.643H648.985C667.851 909.661 694.694 889.105 718.04 870.967C742.279 852.135 762.818 835.854 766.696 832.279C883.247 747.846 949.514 665.972 968.144 635.458C995.109 595.897 1006.87 560.453 1009.16 529.409C1011.45 498.361 1004.26 471.776 993.419 449.943C971.749 406.314 935.454 381.623 931.111 378.128C801.677 273.961 624.582 205.357 452.151 161.818C280.204 118.402 112.803 99.8883 1.72729 95.918V1.03516Z" stroke="url(#paint8_linear_2038_563)" stroke-opacity="0.08" stroke-width="2"/>
              <path opacity="0.5" d="M1.27246 48.4175C584.692 78.7566 1287.07 222.716 1190.22 915.847" stroke="url(#paint9_linear_2038_563)" stroke-opacity="0.3" stroke-width="8" stroke-dasharray="33 33"/>
              <defs>
              <filter id="filter0_fg_2038_563" x="21.688" y="38.4639" width="1360.49" height="815.497" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="20.7" result="effect1_foregroundBlur_2038_563"/>
              <feTurbulence type="fractalNoise" baseFrequency="0.012422360479831696 0.012422360479831696" numOctaves="3" seed="3767" />
              <feDisplacementMap in="effect1_foregroundBlur_2038_563" scale="108" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
              <feMerge result="effect2_texture_2038_563">
              <feMergeNode in="displacedImage"/>
              </feMerge>
              </filter>
              <linearGradient id="paint0_linear_2038_563" x1="1154.18" y1="450.917" x2="179.552" y2="666.813" gradientUnits="userSpaceOnUse">
              <stop offset="0.0657965" stop-color="white" stop-opacity="0"/>
              <stop offset="1" stop-color="white"/>
              </linearGradient>
              <linearGradient id="paint1_linear_2038_563" x1="992.67" y1="156.486" x2="989.896" y2="712.949" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0E0E0E" stop-opacity="0"/>
              <stop offset="1" stop-color="#0E0E0E"/>
              </linearGradient>
              <linearGradient id="paint2_linear_2038_563" x1="1010.61" y1="207.675" x2="990.151" y2="712.861" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0E0E0E"/>
              <stop offset="1" stop-color="#262626" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="paint3_linear_2038_563" x1="286.476" y1="53.3399" x2="281.247" y2="308.898" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0E0E0E" stop-opacity="0"/>
              <stop offset="1" stop-color="#0E0E0E"/>
              </linearGradient>
              <linearGradient id="paint4_linear_2038_563" x1="286.476" y1="53.3399" x2="281.247" y2="308.898" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0E0E0E"/>
              <stop offset="1" stop-color="#262626" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="paint5_linear_2038_563" x1="708.013" y1="154.002" x2="702.784" y2="409.559" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0E0E0E" stop-opacity="0"/>
              <stop offset="1" stop-color="#0E0E0E"/>
              </linearGradient>
              <linearGradient id="paint6_linear_2038_563" x1="708.013" y1="154.002" x2="702.784" y2="409.559" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0E0E0E"/>
              <stop offset="1" stop-color="#262626" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="paint7_linear_2038_563" x1="-182.508" y1="-206.395" x2="-139.816" y2="1052.59" gradientUnits="userSpaceOnUse">
              <stop stop-color="#303030"/>
              <stop offset="0.188894" stop-color="#141414"/>
              <stop offset="0.288395" stop-color="#141414"/>
              <stop offset="0.723232" stop-color="#0D0D0D"/>
              <stop offset="1"/>
              </linearGradient>
              <linearGradient id="paint8_linear_2038_563" x1="746.425" y1="0" x2="746.425" y2="924.643" gradientUnits="userSpaceOnUse">
              <stop stop-color="white"/>
              <stop offset="1" stop-color="white" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="paint9_linear_2038_563" x1="600.256" y1="48.4175" x2="1199.24" y2="915.847" gradientUnits="userSpaceOnUse">
              <stop stop-color="white"/>
              <stop offset="1" stop-color="white" stop-opacity="0"/>
              </linearGradient>
              </defs>
              </svg>
            </div>
              
        </div>
    );
};

export default Pagethree;