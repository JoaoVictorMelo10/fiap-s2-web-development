import {} from 'react'
/* IMPORTANDO UMA IMAGEM*/
import Imagem from '/src/assets/Imagem1.jpg'
/* IMPORTANDO O CSS*/
import '../css/estilo.css'

const Home = () => {
  return (
    <section>
  
        {/*CHAMANDO UMA IMAGEM COM A CLASSE IMG */}
        <img src={Imagem} alt="imagem" className="img"/>
    </section>
  )
}

export default Home
