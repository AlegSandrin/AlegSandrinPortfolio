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

  const [darkMode, setDarkMode] = useState(true);

  const switchModePages = (darkMode) => {
    setDarkMode(darkMode)
}

  return (

    <div className="flex flex-col w-full h-full">
        <div>
        <Net darkMode={darkMode}/>
        <Welcome switchModePages={switchModePages}/>
        </div>

        <div>
        <Globe darkMode={darkMode}/>
        <Projetos darkMode={darkMode}/>
        </div>

        <div >
        <Birds darkMode={darkMode}/>
        <Contato darkMode={darkMode}/>
        </div>
    </div>

  );
}

export default App;