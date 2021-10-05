//import logo from './logo.svg';
//import './App.css';
import { MostarAlert } from "./components/Alerts";
import { Avatar } from "./components/Avatar";

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

        <Avatar
        
        radio= "100%"
        ancho="128px"
        altura="128px"
        tamaño="200px"
        
        
        ></Avatar>
      </header>
    </div>
  );
}

export default App;
