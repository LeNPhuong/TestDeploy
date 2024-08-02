'use client'

import { NextPage } from 'next'
import React, { ReactNode } from 'react'

const layout: NextPage<{ children: ReactNode }> = ({ children }) => {
  return <div className="min-h-[750px] max-w-[1200px] mx-auto">{children}</div>
}

export default layout
