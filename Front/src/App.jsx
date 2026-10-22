import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Pessoas from "./pages/Pessoas/Pessoas.jsx";
import Cargos from "./pages/Cargos/Cargos.jsx";

function App() {
    return (
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Pessoas" element={<Pessoas/>} />
                <Route path="/Cargos" element={<Cargos/>} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;

