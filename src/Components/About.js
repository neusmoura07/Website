import React from 'react'
import {BsFillPlayCircleFill} from "react-icons/bs"
import CuriosidadesBackgroundImage from "../Assets/enem-2018-logo1-removebg-preview-_3_.svg"

const About = () => {
  return (
    <div className='curiosidades-section-container'>
        <div className='curiosidades-section-image-container'>
            <img src={CuriosidadesBackgroundImage} alt="" />
        </div>
        <div></div>
    </div>
  )
}

export default About