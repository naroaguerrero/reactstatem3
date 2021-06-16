import { useState } from "react";

function Main(props) {
  function Barco(props) {
    let [tripulacion, setTripulacion] = useState(props.tripulantes);
    return (
      <div key={props.index} className="card">
        <h1>{props.nombre}</h1>
        <h2>{props.eslora}</h2>
        <p>Tripulantes: {tripulacion}</p>
        <button
          onClick={() => {
            setTripulacion(tripulacion + 1);
          }}
        >
          Embarcar
        </button>
      </div>
    );
  }

  const mostrarBarcos = props.barcos.map((barco, index) => {
    return (
      <Barco
        index={index}
        nombre={barco.nombre}
        eslora={barco.eslora}
        tripulantes={barco.tripulantes}
      />
    );
  });

  return mostrarBarcos;
}

export default Main;
