import React, { useEffect } from "react";
import Background from "./components/Background";
import LogoLoader from "./components/LogoLoader";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import './App.scss';

function App() {
  useEffect(() => {
    // Add 'no-scroll' class to body to disable scrolling
    document.body.classList.add("no-scroll");

    // Remove 'no-scroll' class after 2 seconds to enable scrolling
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
