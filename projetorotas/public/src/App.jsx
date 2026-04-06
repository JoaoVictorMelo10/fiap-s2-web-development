// Importa os componentes base da biblioteca para gerenciar a navegação
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importa o componente que será exibido caso o usuário acesse uma rota inexistente (404)
import Error from './routes/Error';

// Importa os componentes de "página" que você criou para cada endereço da URL
import Home from './routes/Home';
import Produto from './routes/Produto';

// Importa componentes fixos que aparecem em todas as páginas (como menu e rodapé)
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    // O BrowserRouter é o "Pai" de tudo; ele habilita o uso de rotas no navegador
    <BrowserRouter>
      
      {/* O Nav está fora do <Routes>, então ele aparece fixo no topo de todas as páginas */}
      <Nav/>

        {/* O <Routes> funciona como um interruptor (switch): ele olha a URL e escolhe qual rota mostrar */}
        <Routes>      
          
          {/* path="*" captura qualquer URL que não coincida com as rotas abaixo (página de erro) */}
          <Route path="*" element={<Error />} /> 
          
          {/* path="/" define a página inicial (o endereço base do seu site) */}
          <Route path="/" element={<Home />} />
          
          {/* path="/produto" define que ao acessar seu-site.com/produto, o componente Produto será renderizado */}
          <Route path="/produto" element={<Produto />} />
          
        </Routes>

      {/* O Footer também está fora do <Routes>, fixo no final de todas as páginas */}
      <Footer/>

    </BrowserRouter>
  );
}

// Exporta o componente App para ser usado no arquivo main.jsx/index.jsx
export default App;