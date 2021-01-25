import React from 'react'


const Alert2 = (props) => {

   
    return (
        <div>
        
                            <div className="">
                                
                          <p>usuario {props.id_usuario} diz :  {props.alertas} <button className="btn btn-dark delet">Deletar</button>
                          <button className="btn btn-dark atual">Atualizar</button> </p>
                        
                        </div>

                            
             </div>
    )
}

export default Alert2
