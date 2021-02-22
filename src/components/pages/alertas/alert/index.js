import React from "react";
import styled from "styled-components";
 

const MainPage = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;

`

const Container = styled.div`
  background-color: #fff;
  width: 50vh;
  height: auto;

  padding: 2vh 2vh;

  border-radius:2vh;

  p {
    font-size: 1.6vh;
  }

  i {
    font-size: 2vh;
  }
`;

const alert = (props) => {
  return (
    <MainPage>
      <Container>
        <p>
          usuario <b>{props.id_usuario}</b>
          <br />
          diz :
          <br />
          <i>{props.alertas}</i>
        </p>
      </Container>
      <br />
    </MainPage>
  );
};

export default alert;
