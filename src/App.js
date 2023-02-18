import Welcome from "./Welcome";
import Projetos from "./Projetos";

function App(){
  return (
    <div className="flex flex-col">
      <Welcome/>
      <Projetos/>
    </div>
  );
}

export default App;