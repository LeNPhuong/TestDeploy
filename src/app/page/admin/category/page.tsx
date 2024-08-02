'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    ;(async () => {
      const rq = await fetch('http://localhost:7602/api/lab/product/category')
      const rs = await rq.json()
      console.log(rs)

      setData(rs.category)
    })()
  }, [])

  if (!data) {
    return <p className="text-center">Loading</p>
  }

  async function deleteCategory(id: string) {
    try {
      const rq = await fetch(
        `http://localhost:7602/api/lab/product/category/delete/${id}`,
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
      <div className="grid-cols-[repeat(2,1fr)] grid justify-center mt-[20px] gap-[20px]">
        <p className="text-center uppercase font-[600] text-red-500 border-[2px] border-stone-500 p-[10px]">
          Tên loại
        </p>
        <p className="text-center uppercase font-[600] text-red-500 border-[2px] border-stone-500 p-[10px]">
          Hành động
        </p>
      </div>
      {data.map((e: any, index: number) => (
        <div
          key={e._id}
          className="grid-cols-[repeat(2,1fr)] grid justify-center mt-[20px]"
        >
          <p className="text-center font-[500]">{e.name}</p>
          <div className="flex justify-center items-center gap-[10px]">
            <Link
              href={`/page/admin/category/${e._id}`}
              className="bg-blue-500 px-[20px] py-[10px] text-[#fff] rounded-[5px]"
            >
              Sửa
            </Link>
            <button
              onClick={() => deleteCategory(e._id)}
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
