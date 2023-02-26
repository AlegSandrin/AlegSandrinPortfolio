// Paginas
import Welcome from "./Welcome"
import Projetos from "./Projetos"
import Contato from "./Contato"

// Vanta - Fundo animado
import Net from "./vanta/Net"
import Globe from "./vanta/Globe"
import Birds from "./vanta/Birds"

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