import "./App.css";
import logo from "./assets/imagenes/stock-photo-cup.jpeg";
import Tarea from "./components/Tarea";
import TareaFormulario from "./components/TareaFormulario";


function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="logo-contenedor">
        <img src={logo}
          className="logo"
          alt="logo"
        />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
       <TareaFormulario />
      </div>
    </div>
  );
}

export default App;
