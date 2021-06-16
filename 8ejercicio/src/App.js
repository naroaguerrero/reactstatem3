import "./App.css";

import { useState } from "react";

function App() {
  const [simbolo, setSimbolo] = useState("O");
  const [cuadrados, setCuadrados] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const comprobarGanador = () => {
    // Horizontales //
    if (cuadrados[0] === cuadrados[1] && cuadrados[1] === cuadrados[2]) {
      return cuadrados[0];
    } else if (cuadrados[3] === cuadrados[4] && cuadrados[4] === cuadrados[5]) {
      console.log(cuadrados[3]);
      return cuadrados[3];
    } else if (cuadrados[6] === cuadrados[7] && cuadrados[7] === cuadrados[8]) {
      console.log(cuadrados[6]);
      return cuadrados[6];
      // Verticales //
    } else if (cuadrados[0] === cuadrados[3] && cuadrados[3] === cuadrados[6]) {
      console.log(cuadrados[0]);
      return cuadrados[0];
    } else if (cuadrados[1] === cuadrados[4] && cuadrados[4] === cuadrados[7]) {
      console.log(cuadrados[1]);
      return cuadrados[1];
    } else if (cuadrados[2] === cuadrados[5] && cuadrados[5] === cuadrados[8]) {
      console.log(cuadrados[2]);
      return cuadrados[2];
      // Diagonales // 
    } else if (cuadrados[0] === cuadrados[4] && cuadrados[4] === cuadrados[8]) {
      console.log(cuadrados[0]);
      return cuadrados[0];
    } else if (cuadrados[2] === cuadrados[4] && cuadrados[4] === cuadrados[6]) {
      console.log(cuadrados[2]);
      return cuadrados[2];
    } else {
      return "";
    }
  };

  let ganador = comprobarGanador();

  const cambiarSimbolo = () => {
    if (simbolo === "O") {
      setSimbolo("X");
    } else {
      setSimbolo("O");
    }
  };

  const pintarBotones = (i) => {
    return (
      <button
        className="botones"
        onClick={() => {
          const array = cuadrados.slice(); //[... cuadrados]
          if (array[i] === null) {
            array[i] = simbolo;
            setCuadrados(array);
            cambiarSimbolo();
          }
        }}
      >
        {cuadrados[i]}
      </button>
    );
  };

  return (
    <>
      <div>
        {pintarBotones(0)}
        {pintarBotones(1)}
        {pintarBotones(2)}
      </div>
      <div>
        {pintarBotones(3)}
        {pintarBotones(4)}
        {pintarBotones(5)}
      </div>
      <div>
        {pintarBotones(6)}
        {pintarBotones(7)}
        {pintarBotones(8)}
      </div>
      <p>Ganador: {ganador}</p>
    </>
  );
}

export default App;
