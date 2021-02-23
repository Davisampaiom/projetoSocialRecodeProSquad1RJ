import React from "react";
import styled from "styled-components";

const MainPage = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
 

  background-color: #fff;
  width: 70vh;
  height: auto;

  padding: 2vh 2vh;

  border-radius: 2vh;

  p {
    font-size: 1.6vh;
  }

  i {
    font-size: 2vh;
  }
`;

const Botao = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;

  position: absolute;
  left: 45vh;

  button {
    width: 3vh;
    height: 30px;
    margin-top: 2vh;
    margin-left: 1vh;
  }
`;

const Alert2 = (props) => {
  return (
    <MainPage>
      <Container>
        
          <p><center>
            usuario <b>{props.id_usuario}</b>
            <br />
            </center>
            diz :
            <br />
            <i>{props.alertas}</i>
          </p>
          <hr />
       
        <Botao>
          <button className="btn btn-dark" disabled>
            deletar
          </button>
          <button className="btn btn-dark" disabled>
            Atualizar
          </button>
        </Botao>

        <br />
      </Container>
    </MainPage>
  );
};

export default Alert2;
