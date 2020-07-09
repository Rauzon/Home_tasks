import React from "react";
import style from './listOfTasks.module.css'
import {priorityTasks, tasksListType} from "./listOfTasksHOC";

type propsType = {
    tasks:Array<tasksListType>
    removeTask: (titleId: number) => void
    filterTasks: (prior:priorityTasks) => void
}

export const TasksList:React.FC<propsType> = (props) => {
    return<>
        <div className={style.content__tasks}>
            <div className={style.content__title}>
                <h3>List of tasks on the day</h3>
            </div>
            <ul id={style.list}>
                {props.tasks.map((t) => {
                    return <>
                        <li key={t.id}>
                            {t.title}
                            <button onClick={() => props.removeTask(t.id)}>x</button>
                        </li>

                    </>
                })}
            </ul>
        </div>
        <div className={style.content__buttons}>
            <button onClick={() => {props.filterTasks("low")}}>low</button>
            <button onClick={() => {props.filterTasks("medium")}}>medium</button>
            <button onClick={() => {props.filterTasks("high")}}>high</button>
        </div>
    </>
}