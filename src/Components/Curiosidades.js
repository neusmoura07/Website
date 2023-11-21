import React from 'react'
import {BsFillPlayCircleFill} from "react-icons/bs"
import CuriosidadesBackgroundImage from "../Assets/enem-2018-logo1-removebg-preview-_3_.svg"

const About = () => {
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

          <div className='curiosidade-section-image-container'>
          <img src= {CuriosidadesBackgroundImage} alt=''/>
        </div>
        <div className='curiosidade-section-text-container'>
          <h1 className='primary-subheading'>Vantagens</h1>
          <p className='primary-text'>
          Atualização Constante: Mantemos nosso conteúdo atualizado, garantindo que você esteja sempre preparado para as mudanças no ENEM. 
          </p>
          <p className='primary-text'>
          Variedade de Conteúdo: Atualmente, oferecemos conteúdo detalhado para as quatro áreas de conhecimento do ENEM: Linguagens e Códigos, Ciências Humanas, Ciências da Natureza e Matemática. Você encontrará informações sobre tudo, desde gramática até ecologia, tudo em um só lugar. 
          </p>
          <p className='primary-text'>
          Flexibilidade de Estudo: Estude no seu próprio ritmo, a qualquer hora e em qualquer lugar, graças à nossa plataforma online.
          </p>
        </div>
        </div>
    </div>
  )
}

export default About