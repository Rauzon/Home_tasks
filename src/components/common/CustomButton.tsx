import React from "react";
import {Button} from "@material-ui/core";


type CustomButtonPropsType = {
    value?: string
    onClick?: () => void
}

export const CustomButton: React.FC<CustomButtonPropsType> = (props) => {

    const onClick = () => {
        if (props.onClick) {
            props.onClick()
        }
    }

    return <>
        <Button variant="contained" onClick={onClick}>{props.value}</Button>
    </>
}