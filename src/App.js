import Welcome from "./Welcome"
import Projetos from "./Projetos"
import Contato from "./Contato"
import Birds from "./vanta/Birds"

import Net from "./vanta/Net"
import Globe from "./vanta/Globe"


function App(){
  return (

    <div className="flex flex-col h-[325vh] lg:h-[300vh]">
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