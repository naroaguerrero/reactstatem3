function Coche(props) {
  return (
    <div key={props.index}>
      <p>{props.altura}</p>
      <p>{props.longuitud}</p>
      <p>{props.ruedas}</p>
      <p>{props.color}</p>
    </div>
  );
}
export default Coche;
