import React, { ChangeEvent, KeyboardEvent } from "react";
import s from './myInput.module.css';
import {TextField} from "@material-ui/core";


type MyInputPropsType = {
    value?: string,
    onChange?: (value: string) => void
    onKeyPress? : (currentKey:number) => void
}

export const MyInput: React.FC<MyInputPropsType> = (props) => {

    const onChange = (e:ChangeEvent<HTMLInputElement>) => {

        const currentValue = e.currentTarget.value

        const unvalidConditions = (currentValue !== undefined && currentValue !== null)

        if(unvalidConditions && props.onChange){
            props.onChange(currentValue)
        }
    }

    const onKeyPress = (e:KeyboardEvent<HTMLInputElement>) => {
        if(e.charCode && props.onKeyPress){
            props.onKeyPress(e.charCode)
        }
    }

    return <div className={s.text_field}>
        <TextField  variant="outlined"  value={props.value} onChange={onChange} />
    </div>
}