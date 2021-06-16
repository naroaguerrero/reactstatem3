import Libro from "./Libro";

function Footer(props) {
  return (
    <>
      <h3>LIBRO DE LA SEMANA: </h3>
      <Libro
        id={props.libro.id}
        img={props.libro.img}
        titulo={props.libro.titulo}
        autor={props.libro.autor}
        descripcion={props.libro.descripcion}
        stock={props.libro.stock}
      />
    </>
  );
}

export default Footer;
