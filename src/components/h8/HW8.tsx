import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import {CustomButton} from "../common/CustomButton";

const initialPeople = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {

    const style = {
        margin: '10px',
    }
    const btnStyle = {
        margin: '10px'
    }


    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div key={p._id} style={style}>
            <span style={style}>name: {p.name}</span>
            <span style={style}>age: {p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "up"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "down"}))
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, {type: "check", payload: 18}))

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}

            {finalPeople}
            <div>
                <div style={btnStyle}><CustomButton onClick={sortUp} value={"sort up"}></CustomButton></div>
                <div style={btnStyle}><CustomButton onClick={sortDown} value={"sort down"}></CustomButton></div>
                <div style={btnStyle}><CustomButton onClick={checkAge} value={"check 18"}></CustomButton></div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    );
}

export default HW8;
