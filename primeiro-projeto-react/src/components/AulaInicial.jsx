import Image from '../assets/imagem.jpg';

function AulaInicial() {
  //declaracoes de variaveis
  let nome = "fiap";
  let apelido = "fiapinho";
  let novoNome = nome.toUpperCase();

    return (
    <>
    <p>Seja bem-vindo a {novoNome}!</p>
    <p>O apelido da {nome} é {apelido}.</p>
    <span> a soma da função é : {soma(10, 6)}</span>
    <p>
      <span> o desconto da função é : {desconto(25, 10)}</span>
    </p>
    <img src={Image} alt="imagem" width = "500"/>


    </>
  )
}

//criando funcao
function soma (valor1, valor2) {
  return valor1 + valor2;
}

//criando arrow function
const desconto = (valor3, valor4) => { return valor3 - valor4; }




export default AulaInicial



