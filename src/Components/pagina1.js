import React from "react";
import Home from "./Home";
import Curiosidades from "./Curiosidades";
import Work from "./Work";
import Contact from "./Contact"
import Vantagens from "./Vantagens"

function pagina1() {
    return (
      <div className="pagina1">
        <Home/>
        <Curiosidades/>
        <Vantagens/>
        <Work/>
  
      </div>
    );
  }

export default pagina1;