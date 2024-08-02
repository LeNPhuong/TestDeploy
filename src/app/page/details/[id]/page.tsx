import React from 'react'
import Items from './Items'

const page = async ({ params }: any) => {
  return (
    <div className="flex justify-center my-[50px]">
      <Items id={params.id} />
    </div>
  )
}

export default page
