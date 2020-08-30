import React, { ChangeEvent, KeyboardEvent } from "react";


type MyInputPropsType = {
    value?: string,
    onChange?: (value: string) => void
    onKeyPress? : (currentKey:number) => void
}

export const MyInput: React.FC<MyInputPropsType> = (props) => {

    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.currentTarget.value

        if(currentValue && props.onChange){
            props.onChange(currentValue)
        }
    }

    const onKeyPress = (e:KeyboardEvent<HTMLInputElement>) => {
        if(e.charCode && props.onKeyPress){
            props.onKeyPress(e.charCode)
        }
    }

    return <>
        <input value={props.value} onChange={onChange} onKeyPress={onKeyPress}/>
    </>
}