'use client'

import { NextPage } from 'next'
import React, { ReactNode } from 'react'

const layout: NextPage<{ children: ReactNode }> = ({ children }) => {
  return <div className="min-h-[750px]">{children}</div>
}

export default layout
