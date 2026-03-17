//criar um array vazio para armazenar as tarefas
let tarefas =[];
//console.log(typeof tarefas)

//função que verifica se o campo de texto está vazio
function validarCampo(input) {
return input.value.trim() === "";
}

//função que vai adicionar a tarefa no array

function adicionarTarefa(){
    //busca o elemento de input pelo id e guarda na variavel
    const tarefa= document.getElementById("task")

    //chama a função validarCampos passando o elemento capturado
    if(validarCampo(tarefa)){
        alert("Campo não pode estar vazio!")
    }else{
        tarefas.push(tarefa.value.trim());
    }
    // chamando a função listar tarefas
    listarTarefas();
}

//função listar Tarefas

function listarTarefas(){
    //buscando o id com a lista usando DUOM(Document Object Model)
    const listarElemento= document.getElementById("lista")

    //transforma o array em uma string
    listarElemento.innerHTML= tarefas

    //percorre cada tarefa e seu index (posição no array)
    .map((tarefas,index) => `<li>${tarefas} <button onclick= "removerItem(${index})">X</button></li>`)
    //junta todos os itens do map em uma unica string sem virgulas entre elas
    .join ('');
}

//função remover tarefa

function removerItem (index){
    tarefas.splice (index,1)
    //atualiza a lista de tarefas
    listarTarefas();
}