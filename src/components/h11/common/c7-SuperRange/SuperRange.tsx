import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import {createStyles, makeStyles, Slider, Theme, Tooltip} from "@material-ui/core";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 300 + theme.spacing(3) * 2,
            margin: '0 auto',
        },
        margin: {
            height: theme.spacing(3),
        },
    }),
);

export const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,
        value,
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>, num: number) => {
        onChange && onChange(e); // сохраняем старую функциональность

        onChangeRange && onChangeRange(num);
    }

    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Slider
                    ValueLabelComponent={ValueLabelComponent}
                    aria-label="custom thumb label"
                    onChange={(e, num) => onChangeCallback(e, num)}
                    value={value}
                />
            </div>
        </>
    );
}

interface IPropsValueLabelComponent {
    children: React.ReactElement;
    open: boolean;
    value: number;
}

function ValueLabelComponent(props: IPropsValueLabelComponent) {
    const {children, open, value} = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

