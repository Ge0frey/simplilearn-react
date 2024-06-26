import FunctionalComonent from "./Components/FunctionalComponent"
import Click from "./Components/Click";
import Counter from "./Components/Counter";
import ParentComponent from "./Components/ParentComponent";
import Classprops from "./Components/Classprops";
import FunctionProps from "./Components/FunctionProps";
import Home from "./Components/StateFunction";
import StateClass from "./Components/StateClass";

function App() {
  const major = "Computer Science";
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
      <FunctionProps name = "John Doe" major = {major}/>
      <Home />
      <StateClass/>
    </div>
  );
}

export default App;
