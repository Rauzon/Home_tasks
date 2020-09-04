import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {v4 as id} from 'uuid';
import s from './navBar.module.css';

type ArrayOfLinksType = {
    id: string,
    link: string
}

export const NavBar = () => {

    const arrayOfLinks: Array<ArrayOfLinksType> = [{id: id(), link: 'pre-junior'},
        {id: id(), link: 'junior'},
        {id: id(), link: 'junior-plus'}
    ]

    const [value, setValue] = useState<boolean>(false)

    const toggleValue = () => {
        setValue(!value)
    }

    const activeClass = (value) ? `${s.menu} ${s.menu_active}` : `${s.menu}`

    return <div className={s.wrapper}>
        <div className={activeClass}>
            <button className={s.menu_btn} onClick={toggleValue}>
                <span></span>
            </button>
            <nav className={s.menu_list}>
                {arrayOfLinks.map(el => <NavLink key={el.id} to={el.link}>{el.link}</NavLink>)}
            </nav>
        </div>
    </div>
}