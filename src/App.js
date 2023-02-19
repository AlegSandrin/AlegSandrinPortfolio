import Welcome from "./Welcome";
import Projetos from "./Projetos";
import Net from "./vanta/Net";
import Globe from "./vanta/Globe"

function App(){
  return (

    <div className="flex flex-col h-[200vh]">
      <Net/>
      <Welcome/>
      <Globe/>
      <Projetos/>
      
    </div>
    

  );
}

export default App;