import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Revenda de Peças Eletrônicas</h1>   
            <nav>
                <Link to="/">Início</Link>{' '}
                <Link to="/Pessoas">Pessoas</Link>{' '}
                <Link to="/Cargos">Cargos</Link>
            </nav>
        </header>
    );
}

export default Header;