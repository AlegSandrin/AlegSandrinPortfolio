// Paginas
import Welcome from "./Welcome"
import Projetos from "./Projetos"
import Contato from "./Contato"

// Vanta - Fundo animado
import Net from "./vanta/Net"
import Globe from "./vanta/Globe"
import Birds from "./vanta/Birds"

function App(){
  return (

    <div className="flex flex-col">
      <Net/>
        <Welcome/>
      <Globe/>
        <Projetos/>
      <Birds/>
        <Contato/>
    </div>


  );
}

export default App;