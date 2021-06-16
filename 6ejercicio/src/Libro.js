import { useState } from "react";

function Libro(props) {
  let [stock, setStock] = useState(props.stock);

  return (
    <div key={props.id} className="card">
      <img src={props.img} alt={props.titulo} />
      <h1>{props.titulo}</h1>
      <h2>{props.autor}</h2>
      <p>{props.descripcion}</p>
      <p>Stock: {stock > 0 ? stock : "No quedan copias"}</p>
      <button
        onClick={() => {
          setStock(stock - 1);
        }}
      >
        Comprar
      </button>
    </div>
  );
}

export default Libro;
