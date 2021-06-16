import "./App.css";
import nombre from "./nombre";
import { useState } from "react";

function App() {
  let [contador, setContador] = useState(0);

  function next() {
    if (contador < 2) {
      setContador(contador + 1);
    } else {
      setContador(0);
    }
  }

  if (contador === 0) {
    return (
      <>
        <h1>{nombre[0]}</h1>
        <button onClick={next}>Siguiente</button>
      </>
    );
  } else if (contador === 1) {
    return (
      <>
        <h1>{nombre[1]}</h1>
        <button onClick={next}>Siguiente</button>
      </>
    );
  } else {
    return (
      <>
        <h1>{nombre[2]}</h1>
        <button onClick={next}>Siguiente</button>
      </>
    );
  }
}

export default App;
