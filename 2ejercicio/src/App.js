import "./App.css";

function App() {
  function TiendaAnimales() {
    let animales = ["perro", "gato", "unicornio"];
    return (
      <ul>
        <li>{animales[0]}</li>
        <li>{animales[1]}</li>
        <li>{animales[2]}</li>
      </ul>
    );
  }

  return <TiendaAnimales animalitos={animales} />;
}

export default App;

///////////////////OTRO EJEMPLO////////////////////////

/* import "./App.css";

function App() {
  function TiendaAnimales() {
    let animales = ["perro", "gato", "unicornio"];
    return (
      <ul>
        <li>{props.animales[0]}</li>
        <li>{props.animales[1]}</li>
        <li>{props.animales[2]}</li>
      </ul>
    );
  }

  return <TiendaAnimales animalitos={animales}/>;
}

export default App; */  
