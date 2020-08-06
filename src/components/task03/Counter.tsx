import React, {useState, ChangeEvent, KeyboardEvent} from "react";
import s from './Counter.module.css'
import {v4 as uuidv4} from 'uuid'

type DataObjType = {
    id: string
    name: string | number
}

export const Counter = () => {


    let [name, setName] = useState<string>('')
    let [value, setValue] = useState<Array<DataObjType>>([])

    const increaseValue = () => {
        if (name) {
            setValue([...value, {id: uuidv4(), name}])
            alert(`Hello, ${name}`)
        }
        setName('')
    }


    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode == 13) {
            increaseValue();
        }

    }

    const changeInputValue = (e: ChangeEvent<HTMLInputElement>): void => {
        setName(e.currentTarget.value)
    }

    return <div className={s.content}>
        <div className={s.content__inner}>
            <div className={s.content__text}>
                <span>{value.length}</span>
            </div>
            <div className={s.content__input}>
                <span>Enter your name:</span>
                <input value={name} onChange={changeInputValue} onKeyPress={onKeyPress}/>
                <button onClick={increaseValue}>increase</button>
            </div>
        </div>
    </div>
}