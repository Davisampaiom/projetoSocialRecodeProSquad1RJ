import "./form.css";
import logo from "../cadastro/logo.png";

import styled from "styled-components";

const Espaco = styled.div`

  margin-left:10%;
  margin-top:10vh;
  margin-right:5vh;



h2{  font-size: 50px;
    color: black;
    width: 100%;}

img {margin-top: 10px;
    margin-right: 10px;
    width: 40px;
    height: 40px;}

    p{  
     margin-top: 25px;
    font-size: 25px;
    color: black;
    padding-left: 20px;}
`

function Login() {
  return (
    <body>
      <div className="page">
        <div className="container-fluid MainPage">
     
          <div className="formlogin">
            <div className="info-form">
              <h2>Fazer login</h2>
              <p>Para entrar no seu Espaço Seguro</p>
            </div>

            <form>
              <div className="input-wrapper">
                <input
                  type="email"
                  name="nome"
                  placeholder="   E-mail"
                  required
                />
              </div>
              <div className="input-wrapper">
                <input
                  type="password"
                  name="senha"
                  placeholder="   Senha"
                  required
                />
              </div>

              <div className="rec-senha">
                <br />
              </div>
            </form>
            <a href="criar_alerta">
              <button type="submit" className="btn btn-dark botao">
                Entrar
              </button>
            </a>
          </div>
          <Espaco>
            <img src={logo} />
            <h2>espaçoseguro</h2>
          <p>
            Se puder fique em casa.
            <br />
            Mas se precisar, saia seguro.
          </p>
      </Espaco>
        </div>{" "}
      
      </div>
    </body>
  );
}

export default Login;
