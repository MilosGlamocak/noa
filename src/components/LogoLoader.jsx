import React, { useState, useEffect } from 'react';
import '../styles/LogoLoader.scss';
import n from '/images/noa/noa-n.svg';
import o from '/images/noa/noa-o.svg';
import a from '/images/noa/noa-a.svg';

function LogoLoader() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Set the component to hidden after the animation duration
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 3000); // Match this duration to your animation total duration (2s + 1s)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`logoLoaderCont ${isHidden ? 'hidden' : ''}`}>
      <img src={n} alt="N" className='logoLoader'/>
      <img src={o} alt="O" className='logoLoader'/>
      <img src={a} alt="A" className='logoLoader'/>
    </div>
  );
}

export default LogoLoader;
