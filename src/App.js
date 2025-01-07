import { useState } from 'react';
import './App.css';
import Header from './componentes/header/header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
console.log(Header);


function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(false) 

  //Ternario --> condicion ? seMuestra : noSeMuestra
  // corto circuito ----- condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Lista de equipos
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }
  ]



  return (
    <div>
      <Header />
      {/* { mostrarFormulario === true ? <Formulario /> : <div></div>} */}
      {/* { mostrarFormulario ? <Formulario /> : <></>} */}
      { mostrarFormulario && <Formulario  equipos ={equipos.map((equipo) => equipo.titulo)} />}

      <MiOrg const cambiarMostrar ={cambiarMostrar}/>
      {
        /* equipos.map( (equipo) => {          
          return <Equipo datos={equipo} key={equipo.titulo} />
        } ) */
       equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} />)
      }
    </div>
  );
}

export default App;
