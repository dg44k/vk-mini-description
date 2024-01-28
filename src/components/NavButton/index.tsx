import { NavLink } from 'react-router-dom'
import React from 'react'
import styles from './styles.module.scss'

import { INavButton } from './interface'

export const NavButton = ({ text, callBack, className, to }: INavButton) => {
    return (
        <NavLink
            onClick={callBack}
            className={`${styles.navButton} ${styles[className]}`}
            to={`/${to}`}
        >
            {text}
        </NavLink>
    )
}