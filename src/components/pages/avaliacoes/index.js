import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Titulo = styled.div`

`

export default function Avaliacoes() {
  return (
    <div className="mainPage">
      <div className="container-fluid flex-column contentPage">
        <Row>
          <Col sm-8>
            <h4>Avaliações recentes | Supermercados</h4>
          </Col>
          <Col sm-4 m>
            <input
              type="search"
              placeholder="Pesquisar pelo nome do estabelecimento ou bairro"
              style={{ width: "40vh" }}
            ></input>
          </Col>
        </Row>

        <Jumbotron
          style={{
            backgroundColor: "#53565A",
            color: "#fff",
            borderRadius: 10,
          }}
          className="mr-3 p-5"
        >
          <div>
            <div>
              <h5><b>Cliente 01</b></h5>
              <p>
                O mercado Salazar não vem cumprindo com as medidas necessárias
                para conter o avanço da Covid, e suas promoções promovem
                aglomerações
              </p>
              <hr />
            </div>
            <div>
              <h5><b>Mercado Salazar</b></h5>
              <p>
                A rede Salazar entende e sempre pretende cumprir com os mais
                rigorosos controles sanitários.
              </p>
              <hr />
            </div>
            <div>
              <h5><b>Cliente 02</b></h5>
              <p>Eles realmente vem melhorando as medidas ultimamente.</p>
            </div>
          </div>

          <Row>
     
          </Row>
        </Jumbotron>

        <div className="ranking">
          <h4>Ranking | Supermercados</h4>
        </div>

        <Jumbotron style={{ backgroundColor: "#B0C4DE", borderRadius: 10, }} className="mr-3">
          <Row>
            <Col style={{ textAlign: "center" }}>
              <div
                style={{ backgroundColor: "#53565A", color: "#fff", borderRadius: 10, }}
                className=" p-4"
              >
                <h5>Melhores avaliados</h5>
              </div>
              <br></br>
              <p>1. Mercado Líder</p>
              <p>2. Mercado Oba</p>
              <p>3. Mercado Custo</p>
            </Col>

            <Col style={{ textAlign: "center" }} className="mb-5">
              <div
                style={{ backgroundColor: "#53565A", color: "#fff", borderRadius: 10, }}
                className=" p-4"
              >
                <h5>Piores avaliados</h5>
              </div>
              <br></br>
              <p>1. Mercado Patinho</p>
              <p>2. Mercado Sabão</p>
              <p>3. Mercado Porco Fino</p>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    </div>
  );
}
