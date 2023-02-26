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

function App(){

  Aos.init({
    duration: 1800,
    offset:0,
  })

  return (

    <div className="flex flex-col">
        <div>
        <Net/>
        <Welcome/>
        </div>

        <div>
        <Globe/>
        <Projetos/>
        </div>

        <div>
        <Birds/>
        <Contato/>
        </div>
    </div>

  );
}

export default App;