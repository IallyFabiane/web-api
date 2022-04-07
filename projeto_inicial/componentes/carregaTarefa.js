import { Tarefa } from "./criaTarefa.js"

export const carregaTarefa =  () => {
    const lista = document.querySelector('[data-list]')

    const tarefasCadastradas = localStorage.getItem('tarefas') || [
    
        tarefasCadastradas.array.forEach((tarefa) => {
            lista.appendChild(Tarefa(tarefa))
        });
}