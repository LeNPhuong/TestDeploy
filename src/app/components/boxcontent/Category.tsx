import { NextPage } from 'next'
import React, { SetStateAction } from 'react'

const Category: NextPage<{
  category: any
  setSortType: React.Dispatch<SetStateAction<any>>
}> = ({ category, setSortType }) => {
  return (
    <div className="flex flex-row justify-center gap-[20px]">
      {category.map((e: any, index: number) => (
        <button
          key={index}
          onClick={() => setSortType((data: any) => (data = e.slugkey))}
        >
          <div className="text-[20px] font-[400] uppercase min-w-[150px] max-w-[150px] flex flex-col text-center p-[5px] cursor-pointer border-[1px] border-[#ccc]">
            {e.name}
          </div>
        </button>
      ))}
    </div>
  )
}

export default Category
