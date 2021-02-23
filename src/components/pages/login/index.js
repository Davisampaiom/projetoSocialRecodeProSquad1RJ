import "./form.css";

function Login() {
  return (
    <body>
      <div className="page">
        <div className="container">
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

              {/* <input type="submit"  value="Entrar"  className="btn btn-dark "/> */}
              {/* <a href="">Esqueceu sua senha?</a> */}
              <div className="rec-senha">
                <br />
              </div>
            </form>
            <a href="criar_alerta">
              <button type="submit" className="btn btn-dark botao">
                Entrar
              </button>
            </a>

            {/* /* <div className="container-rd">
                        <p>Acesso rapido com</p>
                        <div className="rede-social">
                            <a href="">google</a>
                            <a href="">facebook</a>
                        </div>
                    </div> */}
          </div>
        </div>{" "}
        {/* container */}
      </div>
    </body>
  );
}

export default Login;
