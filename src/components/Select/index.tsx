import { memo } from 'react'
import React from 'react'
import styles from './styles.module.scss'

import { ISelect } from './interface'

export const Select = memo(({ children, label, value, handleSelectChange, name }: ISelect) => {
    return (
        <label className={styles.label}>
            <div className={styles.title}>{label}</div>
            <select
                name={name}
                value={value}
                onChange={handleSelectChange}
                className={styles.select}
            >
                {children}
            </select>
        </label>
    )
})