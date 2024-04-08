import FunctionalComonent from "./Components/FunctionalComponent"
import Click from "./Components/Click";
import Counter from "./Components/Counter";
import ParentComponent from "./Components/ParentComponent";
import Classprops from "./Components/Classprops";

function App() {
  return (
    <div>
      <FunctionalComonent/>
      <Click name = "Ge0frey"/>  
      <Counter /> 
      <ParentComponent/>
      <Classprops name = "Geofrey" place = "Switzerland">
        <p>Child component</p>
      </Classprops>
      <Classprops name = "Kimani" place = "Japan">
        <button>Click here</button>
      </Classprops>
    </div>
  );
}

export default App;
