import { useState } from 'react';
import './App.css';
import Header from './componentes/header/header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
console.log(Header);


function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(true) 

  //Ternario --> condicion ? seMuestra : noSeMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div>
      <Header />
      { mostrarFormulario === true ? <Formulario /> : <div></div>}
      
      <MiOrg const cambiarMostrar ={cambiarMostrar}/>
      
    </div>
  );
}

export default App;
