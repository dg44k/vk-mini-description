import { useAppSelector } from '../../hooks/useAppHooks'
import { results } from '../../constants/mockResults'
import { Name } from '../../pages/Congrats/Common'
import React from 'react'
import styles from './styles.module.scss'

export const Section = () => {
    const { nameValue1, nameValue2, zodiacValue1, zodiacValue2 } = useAppSelector(state => state.userData.userData)

    const match = results.map((r, i) =>
        //получаем дивки из значений результатов и приписываем проценты
        <div className={styles.listItem} key={i}>{i + 1}: {r.value}{Math.floor(Math.random() * 101)}%</div>)

    return (
        <section className={styles.data}>
            <div className={styles.matchTitle}>
                ПО ЗНАКУ ЗОДИАКА
            </div>
            <div className={styles.matchAbstract}>
                подтверждает, что
            </div>
            <div className={styles.content}>
                <Name className='name' name={nameValue1 || 'Аноним'} />
                <Name className='zodiac' name={zodiacValue1 || '(secret)'} />
                <div>и</div>
                <Name className='name' name={nameValue2 || 'Аноним'} />
                <Name className='zodiac' name={zodiacValue2 || '(secret)'} />
            </div>
            <div className={styles.match}>Совместимы:</div>
            <div className={styles.list}>{match}</div>
        </section>
    )
}