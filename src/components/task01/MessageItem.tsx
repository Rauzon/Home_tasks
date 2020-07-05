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
                <img src="https://lh3.googleusercontent.com/proxy/AbVr47tnE7AE2PjSwkqw5LBHi_2UgbTmLMgokfZ7hLdp1hRXMh4tvphZZ71iUEJVMoVi9mcMCC9ol_BJWa6MaP3MrcObDG4no-9yVuDz2mDb1GlX04PzniSXkjMHsaWmf_4z1ieKyv8hvytVFXgKJ_LWYRn9" alt=""/>
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