import React, {useState} from "react";
import {EditableSpan} from "../common/EditableSpan/EditableSpan";
import {restoreState, saveState} from "../common/localStorage/localStorage";
import {CustomButton} from "../common/CustomButton";


export const ShowEditeMode = () => {

    let localStorageValue;

    const getValues = () => {
        localStorageValue = restoreState<string>('value', 'default value')
        onChange(localStorageValue)
    }

    const correctValue = (localStorageValue) ? localStorageValue : 'Value is null'

    const [value, setValue] = useState<string>(correctValue)



    const saveValues = () => {
        saveState<string>('value', value)
    }

    const onChange = (currentValue: string) => {
        setValue(currentValue)
    }

    return <>
        <EditableSpan value={value} onChange={onChange}/>
        <CustomButton value={'save values'} onClick={saveValues}/>
        <CustomButton value={'get values'} onClick={getValues}/>
    </>
}