import "./App.css";
import libreria from "./libreria";

import Cabecera from "./Cabecera";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  let random = Math.floor(Math.random() * 2);

  return (
    <>
      <Cabecera usuario={libreria.usuario} />
      <Main libreria={libreria.libros} />
      <Footer libro={libreria.libros[random]} />
    </>
  );
}

export default App;
