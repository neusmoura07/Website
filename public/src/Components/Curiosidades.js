import React from 'react'
import CuriosidadesBackgroundImage from "../Assets/vantagens.png"

const Curiosidades = () => {
  return (
    <div className='curiosidades-section-container'>
        <div className='curiosidades-section-image-container'>
            <img src= {CuriosidadesBackgroundImage} alt=''/>
        </div>
        
        <div className='curiosidade-section-text-container'>
          <h1 className='primary-subheading'>Porque acessar nosso site?</h1>
          <h1 className='primary-heading'>
            Grande quantidade de conteúdos direcionados para o seu ENEM! 
          </h1>
            <p className='primary-text'>
            Estamos dedicados a simplificar a jornada de estudos para o ENEM e ajudar você a alcançar seus objetivos acadêmicos. 
            </p>
            <p className='primary-text'>
            Oferecemos conteúdo detalhado para as quatro áreas de conhecimento do ENEM: Linguagens e Códigos, Ciências Humanas, Ciências da Natureza e Matemática
            </p>
          </div>    
    </div>
  )
}

export default Curiosidades