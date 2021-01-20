import React from 'react'


const alert = (props) => {

   
    return (
        <div>
             <div className="mini-img"></div>
                            <div className="info-alerta">
                                <h3>João Donato</h3>
                          <p>{props.alertas}</p>
                        </div>

                            <div className="permisao">
                                <p>Deseja retirar anonimato</p>

                                <button>Sim</button>
                                <button>Não</button>
                            </div>
                            <div className="clear"></div>
                            <hr/>
        </div>
    )
}

export default alert
