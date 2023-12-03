import React from "react";
import Catalogo from '../Components/Catalogo-pag3'
import NavBar from "../Components/NavBar2"

const Pagina03 = () => {
  return (
    <div>
      <NavBar />
      <main className="conteudo">
        <h1 className="conteudo-titulo">Matérias</h1>
        <Catalogo />
      </main>

    </div>

  );
  
      
}

export default Pagina03;