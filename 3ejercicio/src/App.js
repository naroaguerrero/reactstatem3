import garaje from "./garaje";
import Coche from "./Coche";

function App() {
  const monstrarGaraje = garaje.map((coche, index) => {
    return (
      <Coche
        index={index}
        altura={coche.altura}
        longuitud={coche.longuitud}
        ruedas={coche.ruedas}
        color={coche.color}
      />
    );
  });
  return monstrarGaraje;
}

export default App;
