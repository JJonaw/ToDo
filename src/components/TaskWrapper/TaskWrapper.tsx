import { ChangeEvent, FormEvent, ReactElement, useState } from "react"

import { PlusCircle } from "phosphor-react"
import ClipboardText from "../../assets/Clipboard.svg"


import style from './TaskWrapper.module.css'

import { TaskBar } from "../TaskBar/TaskBar"

export function TaskWrapper() {

    const [TaskValue, setTaskValue] = useState<string>('')

    function changeTaskValue(event: ChangeEvent<HTMLInputElement>) {
        setTaskValue(event.target.value)
    }

    const [TaskContent, setTaskContent] = useState<Array<string>>([])

    function sendTask(event: FormEvent) {
        event.preventDefault()
        setTaskContent([...TaskContent, TaskValue])
        setTaskValue('')
    }

    function DeletedTask(task:string) {
        const newTaskArray = TaskContent.filter(vetor => {
            return vetor !== task
        })
        setTaskContent(newTaskArray)
        setcompleted(completed - 1)
    }

    const [completed, setcompleted] = useState(0)

    function completedTasks(value:boolean) {
        if(value === true) {
            setcompleted(completed + 1)
        }else {
            setcompleted(completed - 1)
        }
    }

    const hasNoTasks = TaskContent.length === 0 ? {display:"flex"} : {display: "none"}
    const emptyInput = TaskValue.length === 0

    return (
        <div className={style.TaskWrapperContainer}>
            <form className={style.form} onSubmit={sendTask}>
                <input placeholder="Adicione uma nova tarefa" onChange={changeTaskValue} value={TaskValue}/>
                <button type="submit" disabled={emptyInput}>
                    Criar
                    <PlusCircle size={18} weight={"bold"}/>
                </button>
            </form>
            <div className={style.ContainerTask}>
                <header className={style.TaskHeader}>
                    <div>
                        <div className={style.childrent1}>Tarefas criadas</div>
                        <div className={style.childrent2}>{TaskContent.length}</div>
                    </div>
                    <div>
                        <div className={style.childrend1}>Concluídas</div>
                        <div className={style.childrent2}>{completed}</div>
                    </div>
                </header>
                <div className={style.TaskList}>
                    <div style={hasNoTasks} className={style.NotTask}>
                        <img src={ClipboardText} alt="Clipboard" />
                        <div className={style.TaskInfo}>
                            <strong>Você ainda não tem tarefas cadastradas</strong>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    </div>
                    {TaskContent.map((vetor): ReactElement => {
                        return (
                            <TaskBar key={vetor} Task={vetor} CompletedTasks={completedTasks} onDeletedTask={DeletedTask}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}