import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card';
import styles from './style.css';

const CardsSg = () => {
 
  
  return (
    <div className={styles.container}>
        <Typography gutterBottom variant="h4" component="h2">São Gonçalo</Typography>
      <Grid container spacing={3} justify="center">
        <div className="card">
        <CardComponent
          className={styles.infected}
          cardTitle="Casos confirmado"
          value={37651}
          lastUpdate={13012020}
        />
        
 
        
        <CardComponent
          className={styles.recovered}
          cardTitle="Pacientes curados"
          value={36209}
          lastUpdate={13012020}
         
         
        />
        
      
       <CardComponent
          className={styles.deaths}
          cardTitle="Mortes confirmadas" 
          value={1105}
          lastUpdate={13012020}
         
          
        />
       </div>
      </Grid>
    </div>
  );
};

export default CardsSg;