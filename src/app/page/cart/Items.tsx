'use client'

import React from 'react'
import { useAppDispatch } from '../redux/store'
import { minus, plus, remove } from '../redux/slice'
import Image from 'next/image'

const Items: React.FC<{ data: any }> = ({ data }) => {
  const dispatch = useAppDispatch()
  return (
    <div className="grid grid-cols-[repeat(5,1fr)] border-b-[1px] border-b-[#ccc] pb-[10px] items-center">
      <div className="flex justify-center">
        <Image src={data?.image} alt="" width={200} height={200} />
      </div>
      <p className="text-center text-[16px] font-[500]">{data.name}</p>
      <p className="text-center text-red-500 font-[700]">{data.price}đ</p>
      <div className="flex justify-center items-center gap-[10px]">
        <button
          onClick={() => dispatch(plus(data._id))}
          className="text-[30px] bg-red-500 w-[30px] h-[30px] leading-[30px] text-center rounded-full text-[#fff]"
        >
          +
        </button>
        <p className="w-[40px] text-center">{data.quantity}</p>
        <button
          onClick={() => dispatch(minus(data._id))}
          className="text-[30px] bg-red-500 w-[30px] h-[30px] leading-[30px] text-center rounded-full text-[#fff]"
        >
          -
        </button>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => dispatch(remove(data._id))}
          className="bg-red-500 w-[100px] p-[5px] rounded-[8px] text-[#fff] font-[500]"
        >
          Xoá
        </button>
      </div>
    </div>
  )
}

export default Items
