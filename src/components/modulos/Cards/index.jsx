import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card';
import styles from './style.css';

const Cards = (props) => {
 
  
  return (
    <div className={styles.container}>
        <Typography gutterBottom variant="h4" component="h2">Brasil</Typography>
      <Grid container spacing={3} justify="center">
        <div className="card">
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
