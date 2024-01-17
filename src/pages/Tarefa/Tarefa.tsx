import { useEffect, useState } from "react"


function Tarefa() {
    const[completed, setCompleted] = useState(false);
    const[tarefa, setTarefa]= useState("");

    
    useEffect(() =>{
        if(completed){
            setTarefa('Parabéns! você concluiu a tarefa');
        }
    },[completed])

    return (
    <div style={{
        textAlign:"center",
        color: "blue",
        backgroundColor:"black",
        fontFamily: "cursive",}}>
        <h2>Componete Tarefa</h2>
        <h3>{tarefa}</h3>
        <p>conclua a tarefa</p>
        <button onClick={()=> setCompleted(true)}>concluir Tarefa</button>
    </div>
  )
    }

export default Tarefa
