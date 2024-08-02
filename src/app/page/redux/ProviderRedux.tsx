'use client'

import { NextPage } from 'next'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

const ProviderRedux: NextPage<{ children: ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

export default ProviderRedux
