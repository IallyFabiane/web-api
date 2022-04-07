import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'
import { carregaTarefa } from './carregaTarefa.js'
 
export const handleNovoItem = (evento) => {

    evento.preventDefault()
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [] //para armazenar o dados do client-side no localStorage na forma de objeto JS
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value) //LIB MOMENT
    const dataFormatada = data.format('DD/MM/YYYY') //LIB MOMENT
    
    const dados = {
        valor,
        dataFormatada
    }

    const tarefasAtualizadas = [...tarefas, dados] // array que recebe tudo que está dentro do array tarefas e do objeto dados

    // o setItem() armazena os dados localmente
    //sessionStorage.setItem("tarefas", JSON.stringify(dados)) armazenamento dos dados recebidos do cliente na API do Navegador Chrome apenas enquanto a sessão estiver aberta(Console -> >> -> Application -> Session Storage)
    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas)) //diferente do sessionStorage, armazena os dados mesmo após o navegador ser fechado.   
    input.value = " "
    carregaTarefa()

}


export const Tarefa = ({ valor, dataFormatada }) => {

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    
    return tarefa
}