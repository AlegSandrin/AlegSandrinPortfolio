// Paginas
import Welcome from "./pages/Welcome"
import Projetos from "./pages/Projetos"
import Contato from "./pages/Contato"

// Componentes
import Footer from "./components/Footer"

// Vanta - Fundo animado
import Net from "./components/vantajs/Net"
import Globe from "./components/vantajs/Globe"
import Birds from "./components/vantajs/Birds"

// Animate on Scroll
import Aos from "aos"
import 'aos/dist/aos.css'

import { useState } from "react";

function App(){

  Aos.init({
    duration: 1800,
    offset:0,
  })

  const displayWidth = window.screen.width;
  const darkModeStorage = localStorage.getItem('darkMode')
  const vantajsStorage = localStorage.getItem('vantajs')

  const [darkMode, setDarkMode] = useState(
    darkModeStorage === 'true' ? true : 
    darkModeStorage === 'false' ? false : true
  );
  const [vantajs, setVantajs] = useState(
    displayWidth < 1024 && vantajsStorage !== 'false' ? false : 
    vantajsStorage === 'true' ? true : 
    vantajsStorage === 'false' ? false : true
  )

  const switchModePages = (toggle) => {
    localStorage.setItem('darkMode', toggle ? 'true' : 'false')
    setDarkMode(toggle)
}

  const toggleVantajs = (toggle) => {
    localStorage.setItem('vantajs', toggle ? 'true' : 'false')
    setVantajs(toggle)
  }

  return (
    <div className="flex flex-col w-full h-full">
      {/* <div className={`background absolute w-full h-full -z-0 opacity-20 ${darkMode ? "invert" : ""}`}></div> */}
      <div>
        <Net 
        darkMode={darkMode}
        vantajs={vantajs}
        />
        <Welcome
        pageConfig={{
          darkMode: darkMode, 
          vantajs: vantajs
        }}
        switchModePages={switchModePages}
        toggleVantajs={toggleVantajs}
        />
      </div>

      <div>
        <Globe 
        darkMode={darkMode}
        vantajs={vantajs}
        />
        <Projetos darkMode={darkMode}/>
      </div>

      <div >
        <Birds 
        darkMode={darkMode}
        vantajs={vantajs}
        />
        <Contato darkMode={darkMode}/>
      </div>
      <Footer darkMode={darkMode}/>  
    </div>

  );
}

export default App;