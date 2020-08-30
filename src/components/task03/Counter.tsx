import React, {useState} from "react";
import s from './Counter.module.css'
import {v4 as uuidv4} from 'uuid'
import {MyInput} from "../common/MyInput";
import { CustomButton } from "../common/CustomButton";

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


    const onKeyPress = (currentKey: number) => {
        if (currentKey === 13) {
            increaseValue();
        }

    }

    const changeInputValue = (currentValue:string): void => {
        setName(currentValue)
    }

    return <div className={s.content}>
        <div className={s.content__inner}>
            <div className={s.content__text}>
                <span>{value.length}</span>
            </div>
            <div className={s.content__input}>
                <span>Enter your name:</span>
                <MyInput value={name} onChange={changeInputValue} onKeyPress={onKeyPress}/>
                <CustomButton onClick={increaseValue} value={'increase'}/>
            </div>
        </div>
    </div>
}