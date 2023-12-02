import React from "react";
import Catalogo from '../Components/Catalogo-pag3'
import Produtos from '../Components/Produtos-pag3'
import Header from "../Components/Header-pag3";

const Pagina03 = () => {
  return (
    <div>
      <Header />
      <main className="conteudo">
        <h2 className="conteudo-titulo">Qual matéria deseja acessar?</h2>
        <Catalogo />
      </main>

    </div>

  );
  
      
}

export default Pagina03;