import "./meusalertas.css";
import React, { useState, useEffect } from "react";
import Alert2 from "../alertas/alert2";


function Criar_alerta() {
  const url = "https://backsquad1.herokuapp.com/alerta";

  const [newalert, setNewalert] = React.useState({
    alertas: "",
    id_usuario: "",
  });

 


  const [alert, setAlert] = useState(null);
  const fetchApi = async () => {
    const getresponse = await fetch(url);
    const getresponseJSON = await getresponse.json();
    setAlert(getresponseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);

 
  function handleChange({ target }) {
    const { id, value } = target;

    setNewalert({ ...newalert, [id]: value });
  }



  const [response, setResponse] = React.useState(null);

  function handleSubmit(event) {
    fetch("https://backsquad1.herokuapp.com/alertas", {
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
          <div className="alertas d-flex flex-column">
            <div className="info-alerta ml-5  card-body">
              <form onSubmit={handleSubmit}>
                <label>Informe seu ID de usuario</label>
                <input
                  type="text"
                  id="id_usuario"
                  onChange={handleChange}
                  value={newalert.id_usuario}
                  placeholder="   Id usuario"
                  style={{ borderRadius: 5, width: 200 }}
                />
                <br />
                <label>Novo Alerta</label>
                <textarea
                  id="alertas"
                  onChange={handleChange}
                  value={newalert.alertas}
                  style={{ borderRadius: 7 }}
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
                    <Alert2
                      key={item.idalertas}
                      alertas={item.alertas}
                      id_usuario={item.id_usuario}
                      idalertas={item.idalertas}
                    />
                  ))}
              </center>
            </div>
          </div>
        </div>
      </div>

      <div className="container-regiao-contato">
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
