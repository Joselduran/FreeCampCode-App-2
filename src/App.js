import Logo_fondo_blanco from "./Logo_fondo_blanco.png";
import './App.css';
import Boton from "./Componentes/Boton.js";
import Pantalla from "./Componentes/Pantalla.js";
import BotonClear from "./Componentes/BotonClear.js";
import { evaluate } from "mathjs"
import { useState } from "react";


function App() {

  const [input, setInput] = useState("");

  const agregarInput = val => {
    setInput(input + val);
  }

  const limpiarInput = () => {
    setInput('');
  }

  const resultado = () => {
    if (input) setInput(evaluate(input))
    else setInput("");
  }


  return (
    <div className="App">
      <div className='contenedor-logo' >
        <img src={Logo_fondo_blanco} className="josel-logo" alt="Logo Joseld" />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla
          input={input}
        />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={resultado}>=</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={limpiarInput}>Limpiar pantalla</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
