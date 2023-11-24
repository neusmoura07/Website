import React from "react";
import Logo from "../Assets/copialogo3.svg"

const Contact = () => {
    return <div class Name="contact-page-wrapper">
        <h1 className="primary-heading4">Você tem alguma dúvida?</h1>
        <h1 className="primary-heading4">Vamos ajudar você</h1>
        <div className="contact-form-container">
            <input type="text" placeholder="seuemail@gmail.com"/>
            <button className="secondary-button">Enviar</button>
        </div>
        <div>
            <img src={Logo} alt=""/>
        </div>

    </div>
};

export default Contact;