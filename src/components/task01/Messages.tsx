import React from "react";
import style from './messages.module.css';
import {MessageItem} from "./MessageItem";


export const Messages = () => {
    //type for MessageItem
    type messageItemType = {
        id:number,
        name: string,
        message: string,
        time: string
    }

    //data for MessageItem
    const messages:Array<messageItemType> = [
        {id:1, name: "Masha", message: 'Did you buy me that i asked?', time: "10:39"}
    ]

    return <>
        {messages.map((m) => <MessageItem key={m.id} name={m.name} message={m.message} time={m.time} /> )}
    </>
}
