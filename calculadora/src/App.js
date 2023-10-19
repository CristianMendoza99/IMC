import React,{useState} from 'react'
import './App.css';
function App() {
  const [peso,setPeso]=useState("");
  const [altura,setAltura]=useState("");
  const [imc,setImc]=useState(null);
  const [imcStatus,setImcStatus]=useState("");

  const cambiarPeso=(e)=>{
    setPeso(e.target.value)
  }
  const cambiarAltura=(e)=>{
    setAltura(e.target.value)
  }
  const calcularIMC = ()=>{
    if(altura&&peso){
      if(!altura||!peso){
        setImc("")
        setImcStatus("")
      }
      
      const alturaMetros=altura/100
      const imc= peso/(alturaMetros*alturaMetros)
      setImc(imc)

      if (imc<18.5){
        setImcStatus("Te encuentras en Bajo Peso")
      }else if (imc >18.5 && imc <24.9){
        setImcStatus("Te encuentras en Normal")

      }else if (imc>25 && imc <29.9){
        setImcStatus("Te encuentras en Sobre Peso")

      }else{
        setImcStatus("Te encuentras en Obesidad")

      }
    }
  }
  return (
    <div className="App">
   <h1>CALULADORA</h1>
   <h1>Ingrese su altura</h1>
   <input type="number" value={altura} onChange={cambiarAltura}></input>
   <h1>Ingrese su peso</h1>
   <input type="number" value={peso}onChange={cambiarPeso}></input>
   
   <h1>SU IMC ES: {imc}</h1>
   <h1> {imcStatus}</h1>
   
   <button onClick={calcularIMC}>CALCULAR AHORA!</button>
    </div>
  );
}

export default App;
