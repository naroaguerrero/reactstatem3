import { useState } from "react";

function Cabecera(props) {
  let [esVip, setesVip] = useState(props.usuario.vip);

  return (
    <div id="cabecera">
      <h3>{esVip ? "Hola " + props.usuario.nombre : props.usuario.nombre}</h3>
      <img src={props.usuario.imagen} alt={props.usuario.nombre} />
      <button onClick={() => setesVip(!esVip)}>Cambiar status</button>
    </div>
  );
}

export default Cabecera;