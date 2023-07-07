const Button = ({ color, texto, accion, className }) => {
    return (
        <button
            className={`button ${className}`}
            onClick={accion}
            style={{ color }}>
            {texto}
        </button>
    )
}

export default Button;
