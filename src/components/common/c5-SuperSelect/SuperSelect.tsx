import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from "react";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

export const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions:JSX.Element[] | undefined = options?.map((field) => {
        return <option key={field} value={field} >{field}</option>
    })

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
    }

    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    );
}


