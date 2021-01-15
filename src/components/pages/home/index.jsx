import { useState, useEffect } from 'react';
import { Mapinha, Cards, CardsRj, CardsSg } from "../../modulos";


import './style.css';

const Home = () => {
  const urlbr = 'https://covid19-brazil-api.now.sh/api/report/v1/brazil/'

  const [dadosbr, setDadosbr] = useState()
  const fetchApibr = async() =>{
      const response = await fetch(urlbr)
      const responseJSON = await response.json()
      const result = Object.keys(responseJSON).map((key) => responseJSON[key]);
      setDadosbr(result)
  }

  useEffect(() =>{
      fetchApibr()
  }, [])



    return (
        

        <div className="d-flex flex-column  align-items-center pageHome">
            <br/>
            <center><h1>Se puder, fique em casa.<p>Mas se precisar, saia seguro</p></h1></center>
            
            <Mapinha />
            
      

    
     <div className="covid">
     {dadosbr && dadosbr.map(item =>
   <Cards confirmed={item.confirmed} recovered={item.recovered} update_at={item.updated_at}
   deaths={item.deaths} lastUpdate={item.updated_at}/> )}
   <CardsRj />
   <CardsSg />
   <br/>
     </div>

     </div>
    )      
}

export default Home;
