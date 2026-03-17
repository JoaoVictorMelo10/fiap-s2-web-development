import Button from "./Button";

function HelloWord() {

    //declaracao de variaveis
    let cargo = "Dev";
    function enviar(){
        alert(`Ola aluno seu cargo é ${cargo}`);
    }
    return (
        <>
        <h1>Seja bem -vindo!</h1>
        {/* EVENTO onClick chamando a função enviar */}
        <button onClick={enviar}>Veja Mais</button>
        <Button />
        </>
    )
}

export default HelloWord