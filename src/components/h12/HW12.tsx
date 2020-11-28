import React, {useState} from "react";
import s from "./HW12.module.css";
import {SuperSelect} from "../common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, ThemeType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some', 'green', 'blue'];

export function HW12() {

    const theme = useSelector<AppStoreType, ThemeType>((state) => state.theme.color)
    const dispatch = useDispatch()
    // useDispatch, onChangeCallback

    const [value, setValue] = useState<ThemeType>("dark")

    const onChangeHandler = (colorValue: ThemeType) => {
        setValue(colorValue)
        dispatch(changeThemeAC(colorValue))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            <SuperSelect onChangeOption={onChangeHandler} options={themes} value={value}/>
            <hr/>
        </div>
    );
}

