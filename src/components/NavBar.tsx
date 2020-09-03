import React from "react";
import {NavLink} from "react-router-dom";
import {v4 as id} from 'uuid'

type ArrayOfLinksType = {
    id: string,
    link: string
}

export const NavBar = () => {

    const arrayOfLinks: Array<ArrayOfLinksType> = [{id: id(), link: 'pre-junior'},
        {id: id(), link: 'junior'},
        {id: id(), link: 'junior-plus'}
    ]

    return <div>
        {arrayOfLinks.map(el => <NavLink key={el.id} to={el.link}>{el.link}</NavLink>)}
    </div>
}