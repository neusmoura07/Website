import { useEffect } from "react";
import React from "react"


const FormLogin = () => {

  useEffect(() => {
    const cadastrarbtn = document.getElementById("register");
    const container = document.getElementById("container");
    const loginbtn = document.getElementById("login");

    cadastrarbtn.addEventListener("click", () => {
      container.classList.add("active");
    });

    loginbtn.addEventListener("click", () => {
      container.classList.remove("active");
    });

    // Certifique-se de remover os ouvintes de evento quando o componente for desmontado
    return () => {
      cadastrarbtn.removeEventListener("click", () => {
        container.classList.add("active");
      });

      loginbtn.removeEventListener("click", () => {
        container.classList.remove("active");
      });
    };
  }, []); // O segundo parâmetro [] garante que o efeito só seja executado uma vez, semelhante ao componentDidMount

    return <div className="container" id="container">
        <div className="form-container sign-up">
            <form>
                <h1>Cadastre-se Agora</h1>
                <span> Ou use seu email cadastrado</span>
                <input type="text" placeholder="Name"></input>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Senha"/>
                <button>Registrar</button>
            </form>
        </div>
        <div className="form-container sign-in">
            <form>
                <h1>Entre Agora</h1>
                <span> Ou crie sua conta</span>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Senha"/>
                <a href="#">Esqueceu sua senha?</a>
                <button>Entrar</button>
            </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Bem vindo de volta!</h1>
              <p>Insira seus dados pessoais para usar todos os recursos do site</p>
              <button className="hidden" id="login">Entrar</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Olá, Aluno!</h1>
              <p>Registre-se com seus dados pessoais para usar todos os recursos do site</p>
              <button className="hidden" id="register">Cadastrar</button>
            </div>
          </div>
        </div>
    </div>
    

    

    
};

export default FormLogin