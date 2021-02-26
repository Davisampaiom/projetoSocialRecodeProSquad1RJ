import React from "react";
import "./form.css";
import logo from "./logo.png";

import styled from "styled-components";

const Espaco = styled.div`
  margin-left:10%;
  margin-top:10vh;
  margin-right:5vh;

  h2 {
    font-size: 50px;
    color: black;
    width: 100%;
  }

  img {
    margin-top: 10px;
    margin-right: 10px;
    width: 40px;
    height: 40px;
  }

  p {
    margin-top: 25px;
    font-size: 25px;
    color: black;
    padding-left: 20px;
  }
`;

function Cadastro() {
  const [form, setForm] = React.useState({
    nome: "",
    usuario: "",
    nascimento: "",
    email: "",
    senha: "",
  });

  const [response, setResponse] = React.useState(null);

  function handleChange({ target }) {
    const { id, value } = target;

    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    // event.preventDefault();
    fetch("https://backsquad1.herokuapp.com/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((res) => {
      setResponse(res);
    });
  }

  return (
    <body>
      <div className="container-fluid mainPage">
        <div className="formcadastro">
        <center><h2>Fazer cadastro</h2></center>
          <form onSubmit={handleSubmit}>
            <br />
            
            <div className="input-wrapper">
              <input
                onChange={handleChange}
                value={form.nome}
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome Completo"
                required
              />
            </div>
            <div className="input-wrapper">
              <input
                onChange={handleChange}
                value={form.usuario}
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Nome de usuário"
                required
              />
            </div>

            <div className="input-wrapper">
              <input
                onChange={handleChange}
                value={form.nascimento}
                type="text"
                id="nascimento"
                name="nascimento"
                placeholder="Data de Nascimento"
                required
              />
            </div>

            <div className="input-wrapper">
              <input
                onChange={handleChange}
                value={form.email}
                type="text"
                id="email"
                name="email"
                placeholder="E-mail"
                required
              />
            </div>

            <div className="input-wrapper">
              <input
                onChange={handleChange}
                value={form.senha}
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                required
              />
            </div>

            <div className="botao">
              <button type="submit" className="btn btn-dark ">
                Cadastrar
              </button>
            </div>
          </form>{" "}
          <br />
          <center>
            {response && response.ok && <p>Cadastro Efetuado com sucesso</p>}
          </center>
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
      </div>
    </body>
  );
}

export default Cadastro;
