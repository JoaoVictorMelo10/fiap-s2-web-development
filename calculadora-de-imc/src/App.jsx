import { useEffect, useState } from 'react'
import Header from "./components/Header.jsx"
import Resultado from "./components/Resultado.jsx"

function App() {

  //Hookes - useState - manipulação de estado
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  //FUNÇÃO CALCULAR O IMC
  const calcularImc = () => {
    if (peso > 0 && altura > 0){
      const imc = peso / (altura * altura);
      setResultado(imc)
    } else {
      alert("Por favor, preencha os campos de peso e altura corretamente.")
    }
  }

  //EFEITO COLATERAL PARA MOSTRAR O RESULTADO
  useEffect(() => {
    resultado > 0 ? setMostrarResultado(true) : setMostrarResultado(false);
  }, [resultado])

  return (
    <>
      <section className="container">
        <div className="box">
          <Header/>

          <form>
            <div>
              <label htmlFor="altura">Altura<span>(ex: 1.80)</span></label>
              <input
                type="number"
                id="altura"
                step="0.01"
                placeholder="digite sua altura"
                onChange={({target}) => setAltura(target.value)}
              />
            </div>

            <div>
              <label htmlFor="peso">Peso<span>(ex: 70)</span></label>
              <input
                type="number"
                id="peso"
                step="0.1"
                placeholder="digite seu peso"
                onChange={({target}) => setPeso(target.value)}
              />
              <button type="button" onClick={calcularImc}>Calcular</button>
            </div>

          </form>
        </div>

        {mostrarResultado && 
          <Resultado resultado={resultado.toFixed(2)} />
        }

      </section>
    </>
  )
}

export default App