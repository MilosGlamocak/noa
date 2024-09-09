import React, {useRef} from 'react'
import '../styles/FirstPage.scss'
import mouseHover from '/sounds/mouse-hover.mp3'

function FirstPage() {

  const audioRef = useRef(null);

    const handleMouseOver = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0.205;
            audioRef.current.volume = 0;
            audioRef.current.play();
        }
    };

    const handleMouseOut = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
    };

  return (
    <div className='firstPageCont'>
        <div className='navCont'>
            <audio ref={audioRef} src={mouseHover}></audio>
            <p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Home</p>
            <p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>About</p>
            <p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Services</p>
            <p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Contact</p>
        </div>
        <div className='logoCont'>
        <svg width="356" height="135" viewBox="0 0 356 135" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1H12.2L87 101C87.2 101.2 87.6 101.4 87.8 101.4C88.2 101.4 88.4 101.2 88.8 101C88.8 100.8 89 100.6 89 100.2L88.8 1H93.8V133.2H90.8L6.8 22.6C6.6 22.2 6.2 22 6 22C5.4 22 4.8 22.4 4.8 23.2L4.60001 133.6H0V1Z" fill="white" />
            <path d="M175.99 135C143.39 135 108.39 113.8 108.39 67C108.39 27.6 136.19 0 175.99 0C209.39 0 243.19 23.2 243.19 67.8C243.19 114 208.39 135 175.99 135ZM136.99 17.2C128.19 26.2 123.59 40.2 124.19 56.2C125.59 91.4 148.59 129.6 183.99 129.6C196.79 129.6 207.59 125.4 215.19 117.6C223.79 109 228.19 95.6 227.59 80.2C226.39 44 203.39 5 168.19 5C155.59 5 144.79 9.20001 136.99 17.2Z" fill="white" />
            <path d="M240.59 133.6L294.59 1H300.79L355.99 133.6H340.19C339.19 133.6 338.19 132.8 337.79 131.8L317.79 84.6C317.59 84.2 317.19 84 316.79 84H265.79C265.39 84 264.99 84.2 264.79 84.6L244.59 133.6H240.59ZM290.79 20.8C290.79 20.8 290.59 20.8 290.39 21L266.59 79.6L314.79 80L291.19 21L290.79 20.8Z" fill="white" />
        </svg>
        <p>The only marketing agency you will ever need.</p>
        </div>
        <div className='bookBtn' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <p>Book us now</p>
        </div>
    </div>
  )
}

export default FirstPage