import { useState } from "react"
import Menu from "./components/Menu"
import Categorias from "./components/Categorias"
import Dados from "./data/Dados.js"
//OBTEM TODAS AS CATEGORIAS UNICAS DO MENU (ADICIONANDO O BOTÃO TODOS NO INICIO)
const todasCategorias = ["todos", ...new Set(Dados.map((item) => item.categoria))]

import ( useState)

function App() {
  //HOOK - useState = manipular o estado da variavel
  const [menuItens, setMenuItens] = useState(Dados)
  const [categorias] = useState(todasCategorias)
  return (
    <div className="min-h-screen bg-gray-100 text-gray-700 font-sans flex flex-col">
      <header>
        <div>
          <h1> Cardápio FIAP</h1>
          <div></div>
        </div>
      </header>
    </div>
  )
}

export default App
