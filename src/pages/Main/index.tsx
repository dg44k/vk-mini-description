import { Form } from '../../components/Form'
import React from 'react'
import styles from './styles.module.scss'

export const Main = () => {
    return (
        <main className={styles.mainPageWrapper}>
            <div className={styles.title}>
                Заполни, пожалуйста, форму:
            </div>
            <Form />
        </main>
    )
}