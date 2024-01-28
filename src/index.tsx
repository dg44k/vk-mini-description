import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App'
import './styles/resourses/nullstyle.scss'
import { RootProvider } from './components/RootProvider'
import bridge from '@vkontakte/vk-bridge'


bridge.send('VKWebAppInit').then()
bridge.send('VKWebAppJoinGroup', {
  group_id: 209192319
  })
  .then((data) => { 
    if (data.result) {
    }
  })
  .catch((error) => {
    console.log(error);
  })


ReactDOM.render(
  <RootProvider>
    <App />
  </RootProvider>
  ,
  document.getElementById('root')
)

if (process.env.NODE_ENV === 'development') import('./eruda')
