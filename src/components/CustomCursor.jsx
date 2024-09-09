import React, { useEffect, useRef, useState } from 'react';
import '../styles/CustomCursor.scss';

function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const cursorRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const updateCursor = () => {
            if (cursorRef.current) {
                cursorRef.current.style.top = `${position.y}px`;
                cursorRef.current.style.left = `${position.x}px`;
            }
            requestAnimationFrame(updateCursor);
        };

        window.addEventListener('mousemove', handleMouseMove);
        requestAnimationFrame(updateCursor);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [position]);

    return <div className='customCursorCont' ref={cursorRef}></div>;
}

export default CustomCursor;
