'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    ;(async () => {
      const rq = await fetch('http://localhost:7602/api/lab/product')
      const rs = await rq.json()
      setData(rs.data)
    })()
  }, [])

  if (!data) {
    return <p className="text-center">Loading</p>
  }

  async function deletePrd(id: string) {
    console.log(id)
    try {
      const rq = await fetch(
        `http://localhost:7602/api/lab/product/delete/${id}`,
        {
          method: 'DELETE',
        }
      )
      const rs = await rq.json()
      alert(rs.message)

      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col py-[20px]">
      <div className="grid-cols-[repeat(4,1fr)] grid justify-center mt-[20px] gap-[20px]">
        <p className="text-center uppercase font-[600] text-red-500 border-[2px] border-stone-500 p-[10px]">
          Hình ảnh
        </p>
        <p className="text-center uppercase font-[600] text-red-500 border-[2px] border-stone-500 p-[10px]">
          Tên sản phẩm
        </p>
        <p className="text-center uppercase font-[600] text-red-500 border-[2px] border-stone-500 p-[10px]">
          Giá
        </p>
        <p className="text-center uppercase font-[600] text-red-500 border-[2px] border-stone-500 p-[10px]">
          Hành động
        </p>
      </div>
      {data.map((e: any, index: number) => (
        <div
          key={index}
          className="grid-cols-[repeat(4,1fr)] grid justify-center mt-[20px]"
        >
          <div className="flex justify-center">
            <Image width={100} height={100} src={e.image} alt="" />
          </div>
          <p className="text-center font-[500]">{e.name}</p>
          <p className="text-center uppercase font-[600]">{e.price} đ</p>
          <div className="flex justify-center items-center gap-[10px]">
            <Link
              href={`/page/admin/${e._id}`}
              className="bg-blue-500 px-[20px] py-[10px] text-[#fff] rounded-[5px]"
            >
              Sửa
            </Link>
            <button
              onClick={() => deletePrd(e._id)}
              className="bg-red-500 px-[20px] py-[10px] text-[#fff] rounded-[5px]"
            >
              Xoá
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Page
