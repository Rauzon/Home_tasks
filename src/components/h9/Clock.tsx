import React, {useState} from "react";
import {CustomButton} from "../common/CustomButton";
import styled from 'styled-components';

function Clock() {

    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);


    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    }

    const doubleValueOfDateString = (date: number): string => {
        return (date < 10) ? `0${date}` : date.toString()
    }


    const stringHour = doubleValueOfDateString(date.getHours())
    const stringMinutes = doubleValueOfDateString(date.getMinutes())
    const stringSeconds = doubleValueOfDateString(date.getSeconds())


    const stringDay = doubleValueOfDateString(date.getUTCDate())
    const stringMounth = doubleValueOfDateString(date.getMonth() + 1)
    const stringYear = doubleValueOfDateString(date.getFullYear())

    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };

    const fullStingTime = `${stringHour}:${stringMinutes}:${stringSeconds}`
    const stringDate = `${stringDay}.${stringMounth}.${stringYear}`;


    const Div = styled.div`
      display: inline-block;
      padding: 10px;
      text-align: center;
      color: #000;
      transition: font-size .4s linear;
      &:hover.full__time{
        font-size: 32px;
      }
    `;

    const DivBtn = styled.div`
      display: block;
      & button {
        margin: 10px;
      }
    `;

    return (
        <div>
            <Div className={'full__time'}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                {fullStingTime}
            </Div>

            {show && (
                <div className={'full_date'}>
                    {stringDate}
                </div>
            )}

            <DivBtn>
                <CustomButton onClick={start} value={'start'}></CustomButton>
                <CustomButton onClick={stop} value={'stop'}></CustomButton>
            </DivBtn>

        </div>
    );
}


export default Clock;
