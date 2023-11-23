import React from 'react'
import CuriosidadesBackgroundImage from "../Assets/vantagens.png"


const Vantagens = () => {
    return (
        <div className='vantagens-section-container'>
            <div className='vantagens-section-text-container'>
              <h1 className='primary-heading2'>VANTAGENS</h1>
              <p className='primary-text2'>
              Atualização Constante: Mantemos nosso conteúdo atualizado, garantindo que você esteja sempre preparado para as mudanças no ENEM.
              </p>
              <p className='primary-text2'>
              Variedade de Conteúdo: Atualmente, oferecemos conteúdo detalhado para as quatro áreas de conhecimento do ENEM: Linguagens e Códigos, Ciências Humanas, Ciências da Natureza e Matemática. Você encontrará informações sobre tudo, desde gramática até ecologia, tudo em um só lugar. 
              </p>
              <p className='primary-text2'>
              Flexibilidade de Estudo: Estude no seu próprio ritmo, a qualquer hora e em qualquer lugar, graças à nossa plataforma online.
              </p>
            </div>
          
            <div className='vantagens-section-image-container'>
              <img src= {CuriosidadesBackgroundImage} alt=''/>
            </div>
        </div>
        )
    }
    
    export default Vantagens