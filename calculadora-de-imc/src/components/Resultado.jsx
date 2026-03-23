// Desestruturando o resultado para pegar o valor
const Tabela = ({ resultado }) => {
    const valor = parseFloat(resultado)

    if (valor < 18.5) {
        return (
            <>
                <td>Abaixo do Peso</td>
                <td>Abaixo de 18.5</td>
            </>
        )
    } else if (valor >= 18.5 && valor < 25) {
        return (
            <>
                <td>Peso Normal</td>
                <td>Entre 18.5 e 24.9</td>
            </>
        )
    } else if (valor >= 25 && valor < 30) {
        return (
            <>
                <td>Obesidade Grau I</td>
                <td>Entre 25 e 29.9</td>
            </>
        )
    } else {
        return (
            <>
                <td>Obesidade Grau II</td>
                <td>Maior ou igual a 30</td>
            </>
        )
    }
}

const Resultado = ({ resultado }) => {
    return (
        <div>
            <div className="resultado">
                <h2>
                    Seu IMC é de: <span className="img-span">{resultado}</span>
                </h2>
            </div>
            <table className="tabela">
                <thead className="tabelaHeader">
                    <tr>
                        <th>Classificação</th>
                        <th>IMC</th>
                    </tr>
                </thead>
                <tbody className="tabelaBody">
                    <tr>
                        <Tabela resultado={resultado} />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Resultado