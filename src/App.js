import React, {useState, useEffect} from "react"
import "./index.css";
import Home from "./Components/Home";
import Curiosidades from "./Components/Curiosidades";
import Work from "./Components/Work";
import Contact from "./Components/Contact"
import Vantagens from "./Components/Vantagens"
import Pagina01 from "./routes/pagina1"
import NavBar from "./Components/NavBar";
import Pagina02 from "./routes/pagina2";


function App() {

  return (
    <div className="App">
      <Pagina01/>

    </div>
  );
}

export default App;
