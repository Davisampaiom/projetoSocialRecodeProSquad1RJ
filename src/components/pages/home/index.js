import { useState, useEffect } from "react";
import { Mapinha, Cards, CardsRj, CardsSg } from "../../modulos";

import styled from "styled-components";

import "./style.css";

const Texto = styled.h1`
font-size: 3vh;

p{
  font-size: 2.8vh;
  font-weight:lighter ;
}

b{
  font-size: 4vh;
}

em{
  font-size: 3.6vh;
}
`


const Home = () => {
  const urlbr = "https://covid19-brazil-api.now.sh/api/report/v1/brazil/";

  const [dadosbr, setDadosbr] = useState();
  const fetchApibr = async () => {
    const response = await fetch(urlbr);
    const responseJSON = await response.json();
    const result = Object.keys(responseJSON).map((key) => responseJSON[key]);
    setDadosbr(result);
  };

  useEffect(() => {
    fetchApibr();
  }, []);

  return (
    <div className="d-flex flex-column  align-items-center pageHome">
      <br />
      <center>
        <Texto>
          Se puder, <b>fique em casa</b>,<p>Mas se precisar, <em>saia seguro</em>.</p>
        </Texto>
      </center>

      <Mapinha />

      <div className="covid">
        {dadosbr &&
          dadosbr.map((item) => (
            <Cards
              confirmed={item.confirmed}
              recovered={item.recovered}
              update_at={item.updated_at}
              deaths={item.deaths}
              lastUpdate={item.updated_at}
            />
          ))}
        <CardsRj />
        <CardsSg />
        <br />
      </div>
    </div>
  );
};

export default Home;
