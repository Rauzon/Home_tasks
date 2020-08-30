import React from "react";
import {MyInput} from "../common/MyInput";
import {CustomButton} from "../common/CustomButton";
import {CustomCheckbox} from "../common/CustomCheckboxContainer";

export const ShowCustomComponents = () => {
    return <>
        <MyInput/>
        <CustomButton value={'default'}/>
        <CustomCheckbox/>
    </>
}

