

const Categorias = ({categorias,filtroItens}) => {

const produtos=(categoria)=>{
    switch (categoria.ToLowerCase()) {
        case "gamer":
            return;
        case "aventura":
            return;
        case "acao":
            return;
        default:
            return null;
    }
}



  return (
    <nav>
        {categorias.map((categoria,index) => (
            <button
            key={index}
            onClick={() => filtroItens(categoria)}
            >
                {produtos(categoria)}
                {categoria}
            </button>
        ))}
    </nav>
  )
}

export default Categorias