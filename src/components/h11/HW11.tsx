import React, {useState} from "react";
import {SuperRange} from "./common/c7-SuperRange/SuperRange";
import {SuperDoubleRange} from "./common/c8-SuperDoubleRange/SuperDoubleRange";

export function HW11() {
    const [value1, setValue1] = useState<number>(15);
    const [value2, setValue2] = useState<number>(37);

    const onChangeRangeHandler = (value: number) => {
        setValue1(value)
    }
    const onChangeDoubleRangeHandler = (value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    const arrOfValue = [value1, value2];

    return (
        <div>
            <hr/>
            homeworks 11
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={onChangeRangeHandler}
                    value={value1}
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    values={arrOfValue}
                    onChangeRange={onChangeDoubleRangeHandler}
                />
                <span>{value2}</span>
            </div>

            <hr/>
        </div>
    );
}

