import React from "react";

const Product = ({ imgSrc, nome}) => (
    <div className="produto-pag3">
      <img className="produto-img" src={imgSrc} alt="produto" />
      <p className="produto-nome">{nome}</p>
    </div>
  );

export default Product;