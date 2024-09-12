import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import '../styles/HorizontalScrollContainer.scss';
import { ScrollTrigger } from 'gsap/all';

function HorizontalScrollContainer() {

    const itemsFirst = [
        { name: 'milos' },
        { name: 'nikola' },
        { name: 'tamara' },
    ];

    const itemsSecond = [
        { name: 'pedja' },
        { name: 'sandra' },
    ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        /*setTimeout(() => {
            ScrollTrigger.normalizeScroll({
                allowNestedScroll: true,
                lockAxis: false,
                type: "touch",
                momentum: self => {
                    // Adjust these values to get the desired smoothness
                    const damping = 0.5;
                    const maxMomentum = 1.1; // Maximum allowed momentum
                    const minMomentum = 1.1; // Minimum momentum to prevent too quick stops
    
                    // Adjust momentum based on scrolling speed
                    let momentum = self.velocityY * damping;
                    return Math.max(minMomentum, Math.min(maxMomentum, momentum));
                }
            });
        }, 2000);*/
        

        ScrollTrigger.config({ ignoreMobileResize: true });

        // GSAP animation for the first row
        gsap.to('.firstRow', {
            scrollTrigger: {
                trigger: '.firstRow',
                markers: true,
                start: 'top top',
                end: () => '+=' + document.querySelector('.firstRow').offsetWidth,
                scrub: 1, // Adjust to synchronize with scroll speed
                pin: true,
            },
            ease: 'none',
            x: -600,
            duration: 5
        });

        // GSAP animation for the second row
        gsap.to('.secondRow', {
            scrollTrigger: {
                trigger: '.secondRow',
                markers: true,
                start: () => `top top+=${document.querySelector('.firstRow').offsetHeight}`,
                end: () => `+=${document.querySelector('.secondRow').offsetWidth}`,
                scrub: 1,
                pin: true,
            },
            ease: 'none',
            x: 600,
            duration: 5
        });

        return () => {
            ScrollTrigger.normalizeScroll(false);  // Clean up normalization on unmount
        };
    }, []);

    return (
        <div className='horizScrollCont'>
            <div className='row firstRow'>
                {itemsFirst.map((i, index) => (
                    <div className='item' key={index}>{i.name}</div>
                ))}
            </div>
            <div className='row secondRow'>
                {itemsSecond.map((i, index) => (
                    <div className='item' key={index}>{i.name}</div>
                ))}
            </div>
        </div>
    );
}

export default HorizontalScrollContainer;
