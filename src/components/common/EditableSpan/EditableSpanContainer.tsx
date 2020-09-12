import React, {useState} from "react";
import { EditableSpan } from "./EditableSpan";


export const EditableSpanContainer = () => {

    const [value, setValue] = useState<string>('Please, don\'t click by this field twice')

    const onChange = (currentValue:string) => {
        setValue(currentValue)
    }


    return <EditableSpan onChange={onChange} value={value} />

}