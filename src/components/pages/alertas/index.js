import React,{useState, useEffect} from 'react';
import Alert from './alert';




  
function Alertas() {

    const url = "http://localhost:3010/alerta"

    const [alert, setAlert] = useState(null)
    const fetchApi = async()=>{
        const response = await fetch(url)
        const responseJSON = await response.json()
        setAlert(responseJSON)
    }
    useEffect(() => {
        fetchApi()
        },[])


    return(

        <div className="container-fluid mainPage">

                <div className="container-alertas">

                    <div className="meus-alertas">
                        <a href="#" className="titulo one">Meus Alertas</a>

                        <div className="alertas">
                           
                        </div>
                     

                          <center> {alert && alert.map(item =><Alert key={item.idalertas} alertas={item.alertas} />)}<br /></center>
                        
                        {/* <div className="btn-alerta">
                            <button>25 Alertas</button>
                            <div className="clear"></div>
                        </div> */}

                        
                    </div>

                </div>

                <div className="container-regiao-contato">
                    

                    <div className="contato">
                        <h2 className="titulo">Contatos Oficais</h2>
                        <div className="info-contatos">
                            <h4>Prefeitura Municipal de São Gonçalo</h4>
                            <a href="">https://www.saogoncalo.rj.gov.br/</a>
                            <h4>(21) 2199-6300</h4>
                            <div className="linha"></div>
                            <h4>Policia Militar</h4>
                            <h4>190</h4> 
                            <div className="linha"></div> 
                        </div>
                    </div>
                </div>

            </div>

    );
}

export default Alertas;

