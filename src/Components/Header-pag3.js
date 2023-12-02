import React from 'react'
import Background from '../Assets/materiais.png'


function Header (props) {
  return (
    <header className='cabecalho-pagina3'>
      <h1 className='titulo-cabecalho-pagina3'>{props.Titulo}</h1>
    </header>
    
);
      
}

    
export default Header;