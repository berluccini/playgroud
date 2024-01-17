
interface homeProps{
    titulo: string;
    texto: string;
}

function Home(props: homeProps) {
  
    return (
    <>
    <div style={{
        textAlign:"center",
        color: "blue",
        backgroundColor:"black",
        fontFamily: "cursive",
    
    }} >
        <h2>{props.titulo}</h2>
        <p>{props.texto}</p>
    </div>
    
</>
  )
}

export default Home
