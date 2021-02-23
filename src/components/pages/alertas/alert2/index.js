import React from "react";



const Alert2 = (props) => {
  return (
    <div>
      <div className="">
        <p>
          usuario {props.id_usuario} diz : {props.alertas}{" "}
          <button className="btn btn-dark delet" disabled>Deletar</button>
          <button className="btn btn-dark atual" disabled>Atualizar</button>{" "}
        </p>
        <br />
      </div>
    </div>
  );
};

export default Alert2;
