import './Botao.css';

function button(props) {
    return (
        <button className='Botao'>
            {props.texto}
        </button>
    );
}

export default button;