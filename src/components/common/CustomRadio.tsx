import React, {ChangeEvent, useState} from "react";


export const RadioContainer = () => {

    const data: DataRadioType[] = ([{id: 1, name: "data", value: "email"},
        {id: 2, name: "data", value: "login"},
        {id: 3, name: "data", value: "password"}])

    const [checkedValue, setCheckedValue] = useState<number | string>("email")

    const onChange = (checkedValue: number | string) => {

        setCheckedValue(checkedValue)
    }

    return <>
        <CustomRadio data={data} onChange={onChange} checkedValue={checkedValue}/>
    </>
}




export type DataRadioType = {
    id: number,
    name: string,
    value: string
}

type RadioPropsType = {
    data: DataRadioType[]
    onChange: (currentValue: number | string) => void
    checkedValue: number | string
}

export const CustomRadio: React.FC<RadioPropsType> = (props) => {


    const style_container = {
        margin: "10px 5px",
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        justifyContent: "space-evenly",
    }
    const style_radio = {
        dispay: "inline-block",
        margin: '5px 0'
    }


    return <div style={style_container}>
        {
            props.data.map(field => {

                const onChange = (e: ChangeEvent<HTMLInputElement>) => {

                    let currentValue = e.currentTarget.value
                    if (currentValue) {

                        props.onChange(currentValue)
                    }
                }

                return <>
                    <input type="radio" name={field.name} value={field.value} style={style_radio} onChange={onChange}
                           checked={props.checkedValue === `${field.value}`}/>
                </>

            })
        }
    </div>
}