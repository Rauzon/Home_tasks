import React, {useState} from "react";
import style from './listOfTasks.module.css'
import { TasksList } from "./TasksList";

export type tasksListType = {
    id: number
    title: string
    priority: string
}

export type priorityTasks = "all"|"low"|"medium"|"high"

export const ListOfTasksHOC = () => {

    let [state, setState] = useState<Array<tasksListType>>([
        {id: 1, title: "Работа", priority: "high"},
        {id: 2, title: "Уборка", priority: "medium"},
        {id: 3, title: "Посмотреть новую серию Сайтамы", priority: "high"},
        {id: 4, title: "Почитать новую книгу Донцовой", priority: "low"}]);

    //for filter of tasks by click on a button
    let [taskFilter, setTaskFilter] = useState<priorityTasks>("all")

    let filtredTasks = state

    if(taskFilter === "low"){
        filtredTasks = filtredTasks.filter((t) => t.priority === "low")
    }
    if(taskFilter === "medium"){
        filtredTasks = filtredTasks.filter((t) => t.priority === "medium")
    }
    if(taskFilter === "high"){
        filtredTasks = filtredTasks.filter((t) => t.priority === "high")
    }


    const removeTask = (titleId: number) => {
        let copy = [...state]
        copy = copy.filter((t) => t.id !== titleId)
        setState(copy)
    }

    const filterTasks = (prior:priorityTasks) => {
        setTaskFilter(prior)
    }

    return <div className={style.content}>
        <TasksList tasks={filtredTasks}
            removeTask={removeTask} filterTasks={filterTasks}/>
    </div>
}