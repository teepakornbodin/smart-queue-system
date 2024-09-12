'use client'
import React from 'react'
import { Provider } from 'react-redux'
import {store} from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
//for implement redux in project

const ClientProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default ClientProvider