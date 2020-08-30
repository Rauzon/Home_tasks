import React, {ChangeEvent, useState} from "react";
import {Checkbox} from "@material-ui/core";


export const CustomCheckboxContainer = () => {

    const [value, setValue] = useState<boolean>(false)

    const onChange = (value: boolean) => {
        setValue(value)
    }

    return <>
        <CustomCheckbox isChecked={value} onChange={onChange}/>
    </>
}




type CustomCheckboxPropsType = {
    isChecked?: boolean,
    onChange?: (value: boolean) => void
}

export const CustomCheckbox: React.FC<CustomCheckboxPropsType> = (props) => {

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.checked

        const unvalidConditions = (value !== undefined && value !== null)

        if (unvalidConditions && props.onChange) {
            props.onChange(value)
        }
    }

    return <>
        <Checkbox checked={props.isChecked} onChange={onChange}/>
    </>
}