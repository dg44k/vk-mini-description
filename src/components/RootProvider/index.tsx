import React from 'react'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { store } from '../../store/store'

export const RootProvider = ({ children }: { children: ReactNode }) => {
    return (
        <HashRouter>
            <Provider store={store}>
                {children}
            </Provider>
        </HashRouter>
    )
}