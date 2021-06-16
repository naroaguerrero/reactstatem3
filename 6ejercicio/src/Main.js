import Libro from "./Libro";

function Main(props) {
  const mostrarLibros = props.libreria.map((libro, index) => {
    return (
      <Libro
        id={index}
        img={libro.img}
        titulo={libro.titulo}
        autor={libro.autor}
        descripcion={libro.descripcion}
        stock={libro.stock}
      />
    );
  });

  return (
    <div key="catalogo" id="catalogo">
      {mostrarLibros}
    </div>
  );
}

export default Main;
