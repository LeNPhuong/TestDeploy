import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
  redirect('/page/user/login')
  return <div>page</div>
}

export default page
