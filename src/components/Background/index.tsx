import { ReactNode } from 'react'
import React from 'react'
import styles from './styles.module.scss'

export const Background = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.congratsContent}>
            {children}
        </div>
    )
}