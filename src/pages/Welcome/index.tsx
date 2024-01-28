import { NavButton } from '../../components/NavButton'
import React from 'react'
import styles from './styles.module.scss'
import bridge from '@vkontakte/vk-bridge'
import vk_date from '../../../vk-hosting-config.json';

export const Welcome = () => {
    return (
        <main className={styles.greetingsWrapper}>
            <div className={styles.title}>
                Привет! Хочешь узнать, совместимость по знаку зодиака?
            </div>
                
            <NavButton
                to='main'
                className='greetings'
                text='Да!'
                callBack = {() => {
                  
                    bridge.send('VKWebAppAllowMessagesFromGroup', {
                      group_id: vk_date.group_id,
                      })
                      .then((data) => { 
                        if (data.result) {
                        }
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }
                    }
            />
        </main>
    )
}