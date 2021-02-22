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

const CardsSg = () => {
  return (
    <div className={styles.container}>
      <center>
        {" "}
        <Typography >
          São Gonçalo
        </Typography>
      </center>{" "}
      <Grid >
        <div className="card">
          <CardComponent
            className={styles.infected}
            cardTitle="Casos confirmados"
            value={38300}
            lastUpdate={13012020}
          />

          <CardComponent
            className={styles.recovered}
            cardTitle="Pacientes curados"
            value={36662}
            lastUpdate={13012020}
          />

          <CardComponent
            className={styles.deaths}
            cardTitle="Mortes confirmadas"
            value={1130}
            lastUpdate={13012020}
          />
        </div>
      </Grid>
    </div>
  );
};

export default CardsSg;
