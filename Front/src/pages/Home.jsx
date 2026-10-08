import Botao from "../components/Botao";

function Home() {
    return(
        <main>
            <p>pagina inicial:</p>
            <Botao texto="home"/>
            <br/>
            <p>produtos</p>
            <Botao texto="produtos"/>
        </main>
    )
}

export default Home;