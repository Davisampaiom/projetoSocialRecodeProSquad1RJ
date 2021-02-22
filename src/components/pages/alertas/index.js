import React, { useState, useEffect } from "react";
import Alert from "./alert";

import styled from "styled-components";

const AlertArea = styled.div`
background-color:#343a40;

display: flex;
flex-direction:column;

justify-content: flex-start;
align-items: center;

width: 90vh;
height:auto;

padding: 3vh;

border-radius:2vh;
border-style:solid;
border-width:1vh;
border-color:#fff;

`

function Alertas() {
  const url = "https://backsquad1.herokuapp.com/alerta";

  const [alert, setAlert] = useState(null);
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setAlert(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="container-fluid mainPage">
     <div>
     <AlertArea>
        <center>
          {" "}
          {alert &&
            alert.map((item) => (
              <Alert
                key={item.idalertas}
                id_usuario={item.id_usuario}
                alertas={item.alertas}
              />
            ))}
          <br />
        </center>
      </AlertArea>
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

export default Alertas;
