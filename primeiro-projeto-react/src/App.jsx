
//importando o componente AulaInicial
import AulaInicial from './components/AulaInicial';
import HelloWord from './components/HelloWorld';
import Teste from './components/Teste';
import Dados from './components/Dados';


function App() {
  return (
    <>

    {/* chamando o componente AulaInicial */}
      <AulaInicial />
      <HelloWord />
      <Teste/>
      <Dados usuario="Fiap" email="jj@example.com" />
    </>
  )
}






export default App



