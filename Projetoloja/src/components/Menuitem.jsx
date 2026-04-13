

const Menuitem = (titulo,preco,img,descricao) => {
  return (
    <article>
        <img src="img" alt={titulo} />
        <div>
            <header>
                <h4>{titulo}</h4>
                <p>R$ {preco.toFixed(2)}</p>
            </header>
            <p>{descricao}</p>
        </div>
    </article>
  )
}

export default Menuitem