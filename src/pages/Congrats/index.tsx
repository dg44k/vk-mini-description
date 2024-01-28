import { Section } from '../../components/WinningSection'
import { Background } from '../../components/Background'
import { Image, Title } from './Common'
import React from 'react'
import styles from './styles.module.scss'
import { LoadingLayout } from '../../layout/LoadingLayout'

export const Congrats = () => {
    return (
        <LoadingLayout>
            <div className={styles.congratsWrapper}>
                <Background>
                    <div className={styles.congratsContent}>
                        <Title>
                            СВИДЕТЕЛЬСТВО СОВМЕСТИМОСТИ
                        </Title>
                        <Section />
                        <Image />
                    </div>
                </Background>
            </div>
        </LoadingLayout>
    )
}