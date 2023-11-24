import React from "react";
import Multiplataforma from "../Assets/multiplataforma.jpg";
import Divtarefa from "../Assets/divtarefa.jpg";
import Navsimple from "../Assets/cerebro500px.png";
import Logo from "../Assets/copialogo3.svg"

const Work = () => {
    
    const workInfoData = [
        {
            image:Navsimple,
            title:'Navegação Simples',
            text:'Estude no seu próprio ritmo, a qualquer hora e em qualquer lugar.',

        },
        {
            image:Multiplataforma,
            title:'Multiplataforma',
            text:'Estude no site ou no aplicativo da melhor forma que você preferir.',

        },
        {
            image:Divtarefa,
            title:'Separado por Área',
            text:'Separado por matérias por áreas de conhecimentos do ENEM.',

        },
    ];
    return <div className="work-section-wrapper">
        <div className="work-section-bottom">
            {
            workInfoData.map((data) => (
                    <div className="work-section-info">
                        <h2>{data.title} </h2>
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt=""/>
                        </div>
                        <p>{data.text} </p>
                    </div>
                ))}
        </div>
        <div className="work-section-logobaixo">
            <img src={Logo} alt=""/>
        </div>
    </div>;
};

export default Work;