import "./App.css";
import evento from "./evento";

function App() {
  function Evento(props) {
    return (
      <>
        <h1>{props.evento.nombre}</h1>
        <h3>
          {props.evento.fecha} a las {props.evento.hora}
        </h3>
        <p>
          {props.evento.direccion} en {props.evento.ciudad}
        </p>
      </>
    );
  }
  return <Evento evento={evento} />;
}

export default App;
