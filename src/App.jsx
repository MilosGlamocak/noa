import React, { useEffect } from "react";
import Background from "./components/Background";
import LogoLoader from "./components/LogoLoader";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import './App.scss';

function App() {

  useEffect(() => {
    // Disable scrolling by adding 'no-scroll' class to body
    document.body.classList.add("no-scroll");
    
    // Ensure the page starts at the top
    window.scrollTo(0, 0);

    // Enable scrolling after 2 seconds
    const timer = setTimeout(() => {
      document.body.classList.remove("no-scroll");
    }, 2000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="appCont">
      <FirstPage />
      <SecondPage />
      <LogoLoader />
      <Background />
    </div>
  );
}

export default App;
