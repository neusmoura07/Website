import React from "react";
import Product from "./Produtos-pag3";
import fisica from '../Assets/dicionario1.png'
import quimica from '../Assets/quimico1.png'
import biologia from '../Assets/biologia.png'
import Matematica from '../Assets/matematica1.png'
import historia from '../Assets/historia.png'
import geografia from '../Assets/geografia.png'
import filosofia from '../Assets/filosofia.png'
import sociologia from '../Assets/sociologia.png'
import literatura from '../Assets/literatura.png'
import portugues from '../Assets/portugues.png'
import artes from '../Assets/artes.png'
import educacaofisica from '../Assets/educacaofisica.png'


const Catalogo = () =>(
    <section className="catalogo-container">
        <a href="https://www.youtube.com/?bp=wgUCEAE%3D"><Product imgSrc={fisica} nome='Física' /></a>
        <a href="https://www.youtube.com/?bp=wgUCEAE%3D"> <Product imgSrc={quimica} nome='Química' /></a>
        <a href="https://www.youtube.com/?bp=wgUCEAE%3D"><Product imgSrc={biologia} nome='Biologia' /></a>
        <a href="https://www.youtube.com/?bp=wgUCEAE%3D"><Product imgSrc={Matematica} nome='Matemática' /></a>
        <a href="https://www.youtube.com/?bp=wgUCEAE%3D"><Product imgSrc={historia} nome='História' /></a>
        <a href="https://www.youtube.com/?bp=wgUCEAE%3D"><Product imgSrc={geografia} nome='Geografia' /></a>
        <a href="https://www.youtube.com/?bp=wgUCEAE%3D"><Product imgSrc={filosofia} nome='Filosofia' /></a>
        <a href="https://www.youtube.com/?bp=wgUCEAE%3D"><Product imgSrc={sociologia} nome='Sociologia' /></a>
        <a href="https://www.youtube.com/?bp=wgUCEAE%3D"><Product imgSrc={literatura} nome='Literatura' /></a>
        <a href="https://www.youtube.com/?bp=wgUCEAE%3D"><Product imgSrc={portugues} nome='Português' /></a>
        <a href="https://www.youtube.com/?bp=wgUCEAE%3D"><Product imgSrc={artes} nome='Artes' /></a>
        <a href="https://www.youtube.com/?bp=wgUCEAE%3D"><Product imgSrc={educacaofisica} nome='Educação Física' /></a>
        
    </section>
);

export default Catalogo;