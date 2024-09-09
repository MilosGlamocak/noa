import Background from "./components/Background"
import LogoLoader from "./components/LogoLoader"
import './App.scss'
import CustomCursor from "./components/CustomCursor"
import FirstPage from "./components/FirstPage"

function App() {
  return (
    <div className="appCont">
      <FirstPage />
      <LogoLoader />
      <Background />
    </div>
  )
}

export default App
