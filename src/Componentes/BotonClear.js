import React from "react";
import "../hoja-de-estilos/BotonClear.css"

const BotonClear = (props) => (
    <div className="boton-clear" onClick={() => props.manejarClear(props.children)}>
        {props.children}
    </div>
)

export default BotonClear;