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

        gsap.to('.firstRow', {
            scrollTrigger: {
                trigger: '.firstRow',
                markers: true,
                start: 'top top',
                end: /*() => '+=' + document.querySelector('.firstRow').offsetWidth*/'+=100%',
                scrub: 1,
                pin: true,
            },
            ease: 'none',
            x: -600,
            duration: 5
        });

        gsap.to('.secondRow', {
            scrollTrigger: {
                trigger: '.secondRow',
                markers: true,
                start: 'top center',
                end: '+=100%',
                scrub: 1.5,
                pin: true,
            },
            ease: 'none',
            x: 600,
            duration: 5
        });
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
