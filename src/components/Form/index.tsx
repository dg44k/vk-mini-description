import { zodiacsList } from '../../constants/zodiacsList'
import { useFormControl } from '../../hooks/useFormControl'
import React from 'react'
import { NavButton } from '../NavButton'
import { Select } from '../Select'
import { Input } from '../Input'

import styles from './styles.module.scss'

export const Form = () => {
    const {
        formData,
        handleInputChange,
        handleButtonClick,
    } = useFormControl();

    return (
        <section className={styles.formWrapper}>
            <form className={styles.form}>
                <div>
                    <Input
                        name='nameValue1'
                        value={formData.nameValue1}
                        handleInputChange={handleInputChange}
                        placeholder='Имя...'
                        label='Введи первое имя:'
                    />
                    <Select
                        name='zodiacValue1'
                        value={formData.zodiacValue1}
                        handleSelectChange={handleInputChange}
                        label='Выбери знак зодиака:'
                    >
                        {zodiacsList.map(z => <option key={z.id}>{z.value}</option>)}
                    </Select>
                </div>
                <div>
                    <Input
                        name='nameValue2'
                        value={formData.nameValue2}
                        handleInputChange={handleInputChange}
                        placeholder='Имя...'
                        label='Введи второе имя:'
                    />
                    <Select
                        name='zodiacValue2'
                        value={formData.zodiacValue2}
                        handleSelectChange={handleInputChange}
                        label='Выбери знак зодиака:'
                    >
                        {zodiacsList.map(z => <option key={z.id}>{z.value}</option>)}
                    </Select>
                </div>
            </form>
            <NavButton
                className='greetings'
                text='Рассчитаем!'
                callBack={(handleButtonClick)}
                to='congratulations'
            />
        </section>
    )
}