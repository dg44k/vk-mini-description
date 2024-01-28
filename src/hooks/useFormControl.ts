import { useState } from 'react'

import { useAppDispatch } from './useAppHooks'
import { saveUserData } from '../store/slice/userDataSlice'

import { IFormControlResult } from '../components/Form/interface'
import { IInputNames } from '../types/inputNames'

export const useFormControl = (): IFormControlResult => {
    const [formData, setFormData] = useState({
        zodiacValue1: 'Близнецы',
        zodiacValue2: 'Близнецы',
        nameValue1: '',
        nameValue2: '',
    })

    const dispatch = useAppDispatch()

    const handleInputChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => {
        const fieldName = e.currentTarget.name as IInputNames
        setFormData({ ...formData, [fieldName]: e.currentTarget.value })
    }

    const handleButtonClick = () => {
        dispatch(saveUserData(formData))
    }

    return {
        formData,
        handleInputChange,
        handleButtonClick,
    }
}