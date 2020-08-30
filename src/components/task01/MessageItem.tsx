import React from "react";
import style from './messages.module.css'

type PropsType = {
    name: string,
    time: string,
    message: string
}

export const MessageItem: React.FC<PropsType> = (props) => {
    return <div className={style.content}>
        <div className={style.content__wrapper}>
            <div className={style.content__wrapper_img}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSebA8fFnNGT1sxNPZ882iVMNpbng0j_hdBZQ&usqp=CAU" alt=""/>
            </div>
            <div className={style.content__wrapper_item}>
                <div className={style.content__wrapper_item_message}>
                    <div className={style.content__wrapper_item_messageName}>
                        <p>{props.name}</p>
                    </div>
                    <div className={style.content__wrapper_item_messageText}>
                        <p>{props.message}</p>
                    </div>
                </div>
                <div className={style.content__wrapper_item_time}>
                    <p>{props.time}</p>
                </div>
            </div>
        </div>
    </div>
}