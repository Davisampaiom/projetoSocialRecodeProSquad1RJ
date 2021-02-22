import React from "react";
import CardComponent from "../Cards/Card";
import styles from "../Cards/style.css";


import styled from "styled-components";
const Grid = styled.div`

display:flex;
flex-direction:row;

.card{
  display: flex;
  flex-direction:row;

  width:400px;
  height:150px;

  padding:10px;
}
`
const Typography = styled.text`
font-size:3vh;

`


const CardsRj = () => {
  return (
    <div className={styles.container}>
      <center>
        {" "}
        <Typography >
          Rio de Janeiro
        </Typography>
      </center>{" "}
      <Grid >
        <div className="card">
          <CardComponent
            className={styles.infected}
            cardTitle="Casos confirmados"
            value={469437}
            lastUpdate={14012020}
          />

          <CardComponent
            className={styles.recovered}
            cardTitle="Pacientes curados"
            value={435411}
            lastUpdate={14012020}
          />

          <CardComponent
            className={styles.deaths}
            cardTitle="Mortes confirmadas"
            value={27241}
            lastUpdate={14012020}
          />
        </div>
      </Grid>
    </div>
  );
};

export default CardsRj;
