import React from "react";
import "../hoja-de-estilos/Boton.css"

function Boton(props) {
  const esOperador = (valor) => {
    if (isNaN(valor) && valor !== '.' && valor !== "=") {
      return true;
    }
  }
  return (
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  )
}

export default Boton;