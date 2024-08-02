'use client'

import React from 'react'
import useSWR from 'swr'
import { useAppDispatch } from '../../redux/store'
import { add } from '../../redux/slice'
import Image from 'next/image'

const Items: React.FC<{ id: string }> = ({ id }) => {
  const dispatch = useAppDispatch()
  const fetcher = (url: any) => fetch(url).then((res) => res.json())
  const { data, error, isLoading } = useSWR(
    `http://localhost:7602/api/lab/product/details/${id}`,
    fetcher
  )

  if (isLoading) {
    return <h1 className="text-center">Loading</h1>
  }

  return (
    <div className="flex flex-col p-[30px] min-w-[370px] max-w-[370px] border-[1px] border-[#ccc] rounded-lg gap-[10px]">
      <Image src={data.data.image} alt="" width={200} height={200} />
      <h1 className="text-[20px] font-[700] mt-[20px]">{data.data.name}</h1>
      <p className="font-[600] text-red-500 text-[18px]">
        Giá: {data.data.price}đ
      </p>
      <p className="text-justify">
        <span className="text-[15px] font-[700]">Chi tiết:</span>{' '}
        {data.data.description}
      </p>
      <button
        onClick={() => dispatch(add(data.data))}
        className="text-[#fff] bg-red-500 px-[5px] py-[8px] w-full rounded-[5px] font-[500]"
      >
        Mua
      </button>
    </div>
  )
}

export default Items
