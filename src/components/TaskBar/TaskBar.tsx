import { useState, ChangeEvent } from "react"

import { Trash, Check } from "phosphor-react"

import style from './TaskBar.module.css'

interface Task {
    Task: string
    onDeletedTask: (task:string) => void
    CompletedTasks: (value:boolean) => void
}

export function TaskBar({ Task, onDeletedTask, CompletedTasks }: Task) {

    const [checkedValue, setCheckedValue] = useState(false)

    function viewChecked(event: ChangeEvent<HTMLInputElement>) {
        setCheckedValue(event.target.checked)
        CompletedTasks(event.target.checked)
    }

    function DeleteTask() {
        onDeletedTask(Task)
    }

    const changeTaskLine = checkedValue == true ? {textDecoration: 'line-through', color: 'var(--gray-300)'} : {textDecoration: 'none'}
    const activateSelectionArrow = checkedValue == true ? <Check size={15} weight={"bold"} color={"var(--gray-100)"}/> : ''

    return (
        <div className={style.SavedTask}>
            <div className={style.taskdiv}>
                <label className={style.SelectTask}>
                    <input type="checkbox" onChange={viewChecked}/>
                    <div className={style.SelectArrow}>{activateSelectionArrow}</div>
                </label>
                <p style={changeTaskLine}>{Task}</p>
            </div>
            <div className={style.taskTrash}><Trash onClick={DeleteTask} size={20}/></div>
        </div>
    )
}