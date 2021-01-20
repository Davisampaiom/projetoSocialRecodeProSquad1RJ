import "./meusalertas.css";
import React, { useState, useEffect } from "react";
import Alert from "../alertas/alert";

// import { Mapinha } from "../../modulos";

function Criar_alerta() {
  const url = "http://localhost:3010/alerta";

  const [alert, setAlert] = useState(null);
  const fetchApi = async () => {
    const getresponse = await fetch(url);
    const getresponseJSON = await getresponse.json();
    setAlert(getresponseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  const [newalert, setNewalert] = React.useState({
    alertas: "",
    id_usuario: "",
  });
  const [response, setResponse] = React.useState(null);

  function handleChange({ target }) {
    const { id, value } = target;

    setNewalert({ ...newalert, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3010/alertas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newalert),
    }).then((res) => {
      setResponse(res);
    });
  }

  return (
    <div className="container-fluid mainPage">
      <div className="container-alertas">
        <div className="meus-alertas ">
          <a href="#" className="titulo one">
            Meus Alertas
          </a>

          <div className="alertas d-flex flex-column">
            <div className="info-alerta ml-5  card-body">
              <form onSubmit={handleSubmit}>
                <label>Informe seu ID de usuario</label>
                <input
                  type="text"
                  id="id_usuario"
                  onChange={handleChange}
                  value={newalert.id_usuario}
                />
                <label>Novo Alerta</label>
                <textarea
                  id="alertas"
                  onChange={handleChange}
                  value={newalert.alertas}
                ></textarea>
                <input
                  className="btn btn-dark"
                  type="submit"
                  value="Novo alerta"
                />
              </form>
            </div>
            <div className="alertback d-flex flex-row">
              <center>
                {alert &&
                  alert.map((item) => (
                    <Alert
                      key={item.idalertas}
                      alertas={item.alertas}
                      id_usuario={item.id_usuario}
                    />
                  ))}
              </center>
            </div>
          </div>

          {/* <div className="btn-alerta">
            <button>25 Alertas</button>
            <div className="clear"></div>
          </div> */}
        </div>
      </div>

      <div className="container-regiao-contato">
        {/* <div className="container-map">
                        <h2>Minha região</h2>
                        <div className="map" id="map">
                            <Mapinha />
                        </div>
                    </div> */}

        <div className="contato">
          <h2 className="titulo">Contatos Oficais</h2>
          <div className="info-contatos">
            <h4>Prefeitura Municipal de São Gonçalo</h4>
            <a href="">https://www.saogoncalo.rj.gov.br/</a>
            <h4>(21) 2199-6300</h4>
            <div className="linha"></div>
            <h4>Policia Militar</h4>
            <h4>190</h4>
            <div className="linha"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Criar_alerta;
