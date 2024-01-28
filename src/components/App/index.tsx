import { Pages } from '../../pages'
import React from 'react'

import styles from './styles.module.scss' 

export const App = () => {
    return (
        <div className={styles.appWrapper}>
            <Pages />
        </div>
    )
}