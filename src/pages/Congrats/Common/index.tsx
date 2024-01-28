import { ReactNode } from 'react'
import React from 'react'
import logo from '../../../assets/logo.webp'

import styles from './styles.module.scss'

export const Image = () => {
    return (
        <div className={styles.logo}>
            <img width={96} alt='logo' src={logo} />
        </div>
    )
}

export const Title = ({ children }: { children: ReactNode }) => {
    return (
        <header className={styles.title}>
            {children}
        </header>
    )
}

export const Name = ({ name, className }: { name: string; className: string }) => {
    return (
        <div className={styles[className]}>
            {name}{' '}
        </div>
    )
}