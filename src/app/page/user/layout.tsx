import { NextPage } from 'next'
import React, { ReactNode } from 'react'

const layout: NextPage<{ children: ReactNode }> = ({ children }) => {
  return <div>{children}</div>
}

export default layout
