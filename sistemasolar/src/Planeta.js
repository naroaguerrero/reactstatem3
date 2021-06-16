function Planeta(props) {
  console.log(props);
  return (
    <div className="card">
      <img src={props.imagen} alt="" />
      <div className="container">
        <h1>{props.nombre}</h1>
        <p>{props.color}</p>
        <p>{props.temperatura}ºC</p>
      </div>
      <button
        onClick={() => {
          props.borrar(props.index);
        }}
      >
        Borrar último
      </button>
    </div>
  );
}

export default Planeta;
