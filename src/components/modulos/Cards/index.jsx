import React from "react";
import CardComponent from "./Card";
import styles from "./style.css";

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

const Cards = (props) => {
  return (
    <div className={styles.container} >
      <center>
        {" "}
        <Typography >
          Brasil
        </Typography>
      </center>
      <Grid >
        <div className="card" >
          <CardComponent
            className={styles.infected}
            cardTitle="Casos confirmados"
            value={props.confirmed}
            lastUpdate={props}
          />

          <CardComponent
            className={styles.recovered}
            cardTitle="Pacientes curados"
            value={props.recovered}
            lastUpdate={props}
          />

          <CardComponent
            className={styles.deaths}
            cardTitle="Mortes confirmadas"
            value={props.deaths}
            lastUpdate={props}
          />
        </div>
      </Grid>
    </div>
  );
};

export default Cards;
