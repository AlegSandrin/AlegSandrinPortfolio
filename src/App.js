// Paginas
import Welcome from "./pages/Welcome"
import Projetos from "./pages/Projetos"
import Contato from "./pages/Contato"

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

  const [darkMode, setDarkMode] = useState(true)
  const [vantajs, setVantajs] = useState(true)

  const switchModePages = (darkMode) => {
    setDarkMode(darkMode)
}

  const toggleVantajs = (vantajs) => {
    setVantajs(vantajs)
  }

  return (

    <div className="flex flex-col w-full h-full">
        <div>
        <Net 
        darkMode={darkMode}
        vantajs={vantajs}
        />
        <Welcome 
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
    </div>

  );
}

export default App;