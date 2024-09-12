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
        

        setTimeout(() => {
            ScrollTrigger.normalizeScroll({
                allowNestedScroll: true,
                lockAxis: false,
                type: "touch,pointer", // now the page will be drag-scrollable on desktop because "pointer" is in the list
              });
        }, 2000)
        ScrollTrigger.config({ ignoreMobileResize: true, });
        

        // GSAP animation for the first row
        gsap.to('.firstRow', {
            scrollTrigger: {
                trigger: '.firstRow',
                markers: true,
                start: 'top top',
                end: () => '+=' + document.querySelector('.firstRow').offsetWidth,
                scrub: 1,
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
                start: 'top center',
                end: () => '+=' + document.querySelector('.secondRow').offsetWidth,
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
