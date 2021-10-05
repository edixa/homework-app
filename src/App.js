//import logo from './logo.svg';
//import './App.css';
import { MostarAlert } from "./components/Alerts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MostarAlert 
        tamaño="20px" 
        ancho="120px" 
        Fondo="blue" 
        textoColor="white" 
        texto="Default Alert"
        ></MostarAlert>

        <MostarAlert 
        tamaño="20px" 
        ancho="120px" 
        Fondo="yellow" 
        textoColor="black" 
        texto="Success Alert"
        ></MostarAlert>
      </header>
    </div>
  );
}

export default App;
