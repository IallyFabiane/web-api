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
    const horario = data.format('HH:mm')
    const dataFormatada = data.format('DD/MM/YYYY') //LIB MOMENT
    const concluida = false

    const dados = {
        valor,
        dataFormatada,
        horario,
        concluida
    }

    const tarefasAtualizadas = [...tarefas, dados] // array que recebe tudo que está dentro do array tarefas e do objeto dados

    // o setItem() armazena os dados localmente
    //sessionStorage.setItem("tarefas", JSON.stringify(dados)) armazenamento dos dados recebidos do cliente na API do Navegador Chrome apenas enquanto a sessão estiver aberta(Console -> >> -> Application -> Session Storage)
    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas)) //diferente do sessionStorage, armazena os dados mesmo após o navegador ser fechado.   
    input.value = " "
    carregaTarefa()

}


export const Tarefa = ({ valor, horario, concluida }, id) => {

    const tarefa = document.createElement('li')
    const conteudo = `<p class="content">${horario} * ${valor}</p>`
    if (concluida) {
        tarefa.classList.add('done')
    }

    tarefa.classList.add('task')
    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui(carregaTarefa, id))
    tarefa.appendChild(BotaoDeleta(carregaTarefa, id))
    
    return tarefa
}