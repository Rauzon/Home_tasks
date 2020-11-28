import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import { Slider } from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    values: number[]
}

const useStyles = makeStyles({
    root: {
        width: 300,
        margin: '0 auto',
    },
});


export const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, values,
    }
) => {
    // сделать самому, можно подключать библиотеки
    const classes = useStyles();

    const handleChange = (event: any, newValue: number | number[]) => {
        if (onChangeRange) {
            onChangeRange(newValue as [number, number])
        }
    };

    return (
        <div className={classes.root}>
            <Slider
                value={values}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </div>
    );
}

