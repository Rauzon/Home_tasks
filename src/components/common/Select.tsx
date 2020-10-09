import React, {useState} from "react";


export const SelectContainer = () => {

    const data: DataSelectType[] = ([{id: 1, value: 'task1'},
        {id: 2, value: 'task2'},
        {id: 3, value: 'task3'}])

    const [value, setValue] = useState<string>('')

    const onChange = (value: string) => {

        setValue(value)
    }

    return <>
        <Select data={data} onChange={onChange} value={value}/>
    </>
}


export type DataSelectType = {
    id: number
    value: string
}

type SelectPropsType = {
    data: DataSelectType[]
    onChange?: (value: string) => void
    value?: string
}

export const Select: React.FC<SelectPropsType> = (props) => {
    debugger
    const onChange = (e: React.FormEvent<HTMLSelectElement>) => {

        if (e.currentTarget && props.onChange) {
            debugger
            props.onChange(e.currentTarget.value)
        }
    }

    return <div>
        <select onChange={onChange} value={props.value}>
            {props.data.map(field => {
                return <option key={field.id} value={field.value}>{field.value}</option>
            })}
        </select>
    </div>
}