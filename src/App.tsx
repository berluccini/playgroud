
import './App.css'
import Home from './pages/Home/Home'
import Tarefa from './pages/Tarefa/Tarefa'
import Contador from './pages/contador/Contador'


function App() {
 
  return (
    <><div style={{background:"black",
   
     
                  }}>
    <Home
        titulo='Componete Home'
        texto='Este texto foi enviado pelo componete App.'/>
   
   
   <Contador/>
      
    <Tarefa/>
    </div>
    </>
  

  )
}

export default App
