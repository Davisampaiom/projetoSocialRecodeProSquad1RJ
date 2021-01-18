import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card';
import styles from './style.css';

const CardsRj = () => {
 
  
  return (
    <div className={styles.container}>
        <Typography gutterBottom variant="h4" component="h2">Rio de Janeiro</Typography>
      <Grid container spacing={3} justify="center">
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
