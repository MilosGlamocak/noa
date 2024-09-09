import Background from "./components/Background"
import LogoLoader from "./components/LogoLoader"
import './App.scss'
import CustomCursor from "./components/CustomCursor"
import FirstPage from "./components/FirstPage"
import SecondPage from "./components/SecondPage"
import React, { useEffect } from "react"

function App() {
  return (
    <div className="appCont">
      <FirstPage />
      <SecondPage />
      <LogoLoader />
      <Background />
    </div>
  )
}

export default App
