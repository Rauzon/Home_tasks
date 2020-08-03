import React, {useState, ChangeEvent} from "react";
import s from './Counter.module.css'


export const Counter = () => {

    let [value, setValue] = useState<number>(0)
    let [name, setName] = useState<string>('')

    const increaseValue = () => {
        setValue(value + 1);
        {name && alert(name)};
        setName('')
    }

    const changeInputValue = (e:ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    return <div className={s.content}>
        <div className={s.content__inner}>
            <div className={s.content__text}>
                <span>{value}</span>
            </div>
            <div className={s.content__input}>
                <input value={name} onChange={changeInputValue}/>
                <button onClick={increaseValue}>increase</button>
            </div>
        </div>
    </div>
}