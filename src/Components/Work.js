import React from "react";
import Multiplataforma from "../Assets/3094359.svg"
import Divtarefa from "../Assets/3918929.svg"
import Navsimple from "../Assets/7505326.svg"

const Work = () => {
    
    const workInfoData = [
        {
            title:'Navegação Simples',
            Image:Navsimple,
            text:'Estude no seu próprio ritmo, a qualquer hora e em qualquer lugar.'

        },
        {
            title:'Multiplataforma',
            Image:Multiplataforma,
            text:'Estude no site ou no aplicativo da melhor forma que preferir.'

        },
        {
            title:'Separado por Área',
            Image:Divtarefa,
            text:'Separado por matérias por áreas de conhecimentos do ENEM.'

        }
    ]
    return <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">
            Work
            </p>
            <h1>
                How it Works
            </h1>
            <p className="primary-text">
                Aqui estou mais um dia sob o olhar sanguinário do vigia.
            </p>
        </div>
        <div className="work-section-bottom">
            {workInfoData.map((data) => (
                    <div className="word-section-info">
                        <div className="info-boxes-img-container">
                            <img scr= {data.image} alt="" />
                        </div>
                        <h2>{data.title} </h2>
                        <p>{data.text} </p>
                    </div>
                ))}
        </div>
    </div>;
        };

export default Work;