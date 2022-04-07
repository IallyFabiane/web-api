import BotaoConclui from './componentes/concluiTarefa.js'
import BotaoDeleta from './componentes/deletaTarefa.js'
 
let tarefas = []  //recebe os dados das tarefas do client-side e armazena em lista
const handleNovoItem = (evento) => {

    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value) //LIB MOMENT
    const dataFormatada = data.format('DD/MM/YYYY') //LIB MOMENT
    
    const dados = {
        valor,
        dataFormatada
    }

    const criaTarefa = criarTarefa(dados)
    tarefas.push(dados) //empurra cada nova tarefa do client-side no array

    lista.appendChild(criaTarefa)

    // o setItem() armazena os dados localmente
    //sessionStorage.setItem("tarefas", JSON.stringify(dados)) armazenamento dos dados recebidos do cliente na API do Navegador Chrome apenas enquanto a sessão estiver aberta(Console -> >> -> Application -> Session Storage)
    localStorage.setItem("tarefas", JSON.stringify(tarefas)) //diferente do sessionStorage, armazena os dados mesmo após o navegador ser fechado.   
    input.value = " "

}


const criarTarefa = ({ valor, dataFormatada }) => {

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    
    return tarefa
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem)