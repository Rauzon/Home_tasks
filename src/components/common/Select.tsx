import React, {useState} from "react";
import {Select} from "@material-ui/core";


export const SelectContainer = () => {

    const data: DataSelectType[] = ([{id: 1, title: 'task1'},
        {id: 2, title: 'task2'},
        {id: 3, title: 'task3'}])

    const [value, setValue] = useState<unknown>('')

    const onChange = (value: unknown) => {

        setValue(value)
    }

    return <>
        <CustomSelect data={data} onChange={onChange} value={value}/>
    </>
}


export type DataSelectType = {
    id: number
    title: string
}

type SelectPropsType = {
    data: DataSelectType[]
    onChange: (value: unknown) => void
    value: unknown
}

export const CustomSelect: React.FC<SelectPropsType> = (props) => {

    const style = {
        margin: '15px 10px',
    }

    const onChange = (e: React.ChangeEvent<{ value: unknown }>) => {

        if (e.currentTarget && props.onChange) {
            props.onChange(e.currentTarget.value)
        }
    }

    return <div>
        <Select labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={onChange}
                value={props.value}
                style={style}>
            {props.data.map(field => {
                return <option key={field.id} value={field.title}>{field.title}</option>
            })}
        </Select>
    </div>
}