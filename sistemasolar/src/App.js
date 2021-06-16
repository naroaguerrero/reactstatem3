import { useState } from "react";

import "./App.css";
import sistemaSolar from "./sistema";

import Planeta from "./Planeta";

function App() {
  let [sistema, setSistema] = useState(sistemaSolar);

  function borrar(i) {
    console.log(i);
    let copia = [...sistema];
    copia.splice(i, 1);
    setSistema(copia);
  }

  const mostrarPlanetas = sistema.map((planeta, index) => {
    return (
      <Planeta
        key={index}
        index={index}
        nombre={planeta.nombre}
        color={planeta.color}
        temperatura={planeta.temperatura}
        imagen={planeta.imagen}
        borrar={borrar}
      />
    );
  });

  return (
    <>
      <div className="catalogo">{mostrarPlanetas}</div>
    </>
  );
}

export default App;
