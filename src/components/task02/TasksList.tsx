import React from "react";
import style from './listOfTasks.module.css'
import {priorityTasks, tasksListType} from "./listOfTasksHOC";
import {CustomButton} from "../common/CustomButton";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

type propsType = {
    tasks: Array<tasksListType>
    removeTask: (titleId: number) => void
    filterTasks: (prior: priorityTasks) => void
}

export const TasksList: React.FC<propsType> = (props) => {

    const filterTaskHigh = () => props.filterTasks("high")
    const filterTaskMedium = () => props.filterTasks("medium")
    const filterTaskLow = () => props.filterTasks("low")
    const filterTaskAll = () => props.filterTasks("all")



    return <>
        <div className={style.content__tasks}>
            <div className={style.content__title}>
                <h3>List of tasks at a day</h3>
            </div>
            <ul id={style.list}>
                {props.tasks.map((t) => {

                    const removeTask = () => {
                        props.removeTask(t.id)
                    }

                    return <>
                        <li key={t.id}>
                            {t.title}
                            <IconButton aria-label="delete"  onClick={removeTask}>
                                <DeleteIcon fontSize="small" />
                            </IconButton >
                        </li>

                    </>
                })}
            </ul>
        </div>
        <div className={style.content__buttons}>
            <CustomButton value={'all'} onClick={filterTaskAll} />
            <CustomButton value={'low'} onClick={filterTaskLow} />
            <CustomButton value={'medium'} onClick={filterTaskMedium} />
            <CustomButton value={'high'} onClick={filterTaskHigh} />
        </div>
    </>
}