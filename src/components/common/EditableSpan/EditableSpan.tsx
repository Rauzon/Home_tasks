import React, {ChangeEvent, useState} from "react";
import s from './editableSpan.module.css'
import {TextField} from "@material-ui/core";

type EditableSpanType = {
    value?: string
    onChange?: (value: string) => void
}

export const EditableSpan: React.FC<EditableSpanType> = (props) => {

    const [editMode, setEditeMode] = useState<boolean>(true)

    const onDoubleClick = () => {
        setEditeMode(false)
    }

    const onBlur = () => {
        setEditeMode(true)
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.currentTarget.value;

        const unvalidConditions = (currentValue !== undefined && currentValue !== null)

        if (unvalidConditions && props.onChange) {
            props.onChange(currentValue)
        }
    }


    return <div className={s.content}>
        {
            (editMode) ? <span onDoubleClick={onDoubleClick}>{props.value}</span> :
                <TextField value={props.value} onChange={onChange} onBlur={onBlur} autoFocus={true}/>
        }
    </div>

}