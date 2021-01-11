import React from 'react'
import { Mapinha  } from "../../modulos";
import './style.css';

const Home = () => {
    return (
        <div className="d-flex flex-column  align-items-center ">
            <br/>
            <center><h1>Se puder, fique em casa.<p>Mas se precisar, saia seguro</p></h1></center>
            
            <Mapinha />
            </div>
    )      
}

export default Home;
