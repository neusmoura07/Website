import React from "react";
import Product from "./Produtos-pag3";
import Test from '../Assets/vantagens.png'

const Catalogo = () =>(
    <section className="catalogo-container">
        <Product imgSrc={Test} nome='Portugês' />
        <Product imgSrc={Test} nome='Matemática' />
        <Product imgSrc={Test} nome='Sociologia' />
        <Product imgSrc={Test} nome='Redação' />
        <Product imgSrc={Test} nome='História' />
        <Product imgSrc={Test} nome='Geografia' />
        <Product imgSrc={Test} nome='Biologia' />
        <Product imgSrc={Test} nome='Filosofia' />
    </section>
);

export default Catalogo;