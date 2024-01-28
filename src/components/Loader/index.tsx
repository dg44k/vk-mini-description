import loader from '../../assets/loader.svg'
import React from 'react'
import styles from './styles.module.scss'

export const Loader = () => {
    return (
        <div className={styles.wrapper}>
            <img alt='Loader' src={loader} />
        </div>
    )
}