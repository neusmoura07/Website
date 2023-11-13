import React from 'react';
import NavBar from './NavBar';
import {FiArrowRight} from "react-icons/fi"
import BannerImage from "../Assets/enem-2018-logo1-removebg-preview-_3_.svg"

const Home = () => {
    return (
    <div className='home-container'>
        <NavBar/>
        <div className='home-banner-container'>

        <div className='home-text-section'>
            <h1 className='primary-heading'>
            O ENEM simplificado
            </h1>
            <p className='primary-text'>
            Todos os conteúdos em um único lugar!
            </p>
            <button className='secondary-button'>
                Vire Aluno Agora! <FiArrowRight />
            </button>
        </div>
        <div className='home-image-container'>
            <img src={BannerImage} alt="" />
        </div>

        </div>
        
    </div> 
    )
        
}

export default Home;
