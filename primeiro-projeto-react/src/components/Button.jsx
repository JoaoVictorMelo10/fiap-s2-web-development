function Button () {
    // Arrow Funciton

    const handleClick = () => {
        alert("Você clicou no botão componente")
    }
    return (
        <>
        <button onClick={handleClick}>Botão componente</button>
        </>
    )
}


export default Button