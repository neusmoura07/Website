import "./index.css";
import Home from "./Components/Home";
import Curiosidades from "./Components/Curiosidades";
import Work from "./Components/Work";
import Contact from "./Components/Contact"
import Vantagens from "./Components/Vantagens"


function App() {
  return (
    <div className="App">
      <Home/>
      <Curiosidades/>
      <Vantagens/>
      <Work/>
    </div>
  );
}

export default App;
