import './TextoObra.css';

const TextoObra = (props) => {
    return(
    <div className="textoObra">
        <p>{props.texto}</p>
    </div>
    )
}

export default TextoObra;