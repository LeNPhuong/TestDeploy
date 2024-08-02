'use client'

import Category from '@/app/components/boxcontent/Category'
import Items from '@/app/components/boxcontent/Items'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'

const Page: NextPage<{}> = () => {
  const [data, setData] = useState<any>(null)
  const [category, setCategory] = useState<any>(null)
  const [sortType, setSortType] = useState<any>(null)
  const [sort, setSort] = useState<string | null>(null)

  useEffect(() => {
    ;(async () => {
      const req = await fetch('http://localhost:7602/api/lab/product')
      const res = await req.json()
      if (sort) {
        if (sort === 'tang') {
          res.data.sort((a: any, b: any) => a.price - b.price)
        } else if (sort === 'giam') {
          res.data.sort((a: any, b: any) => b.price - a.price)
        }
      }

      if (sortType) {
        res.data = res.data.filter((e: any) => e.category === sortType)
      }

      setCategory(res.category)
      setData(res.data)
    })()
  }, [sort, sortType])

  if (!data) {
    return <h1>Loading</h1>
  }

  return (
    <div className="mt-[50px] flex flex-col py-[50px]">
      <Category category={category} setSortType={setSortType} />
      <div className="flex flex-row justify-center gap-[20px] mt-[20px]">
        <button onClick={() => setSort('tang')}>
          <div className="text-[20px] font-[400] uppercase min-w-[150px] max-w-[150px] flex flex-col text-center p-[5px] cursor-pointer border-[1px] border-[#ccc]">
            Giá tăng
          </div>
        </button>
        <button onClick={() => setSort('giam')}>
          <div className="text-[20px] font-[400] uppercase min-w-[150px] max-w-[150px] flex flex-col text-center p-[5px] cursor-pointer border-[1px] border-[#ccc]">
            Giá giảm
          </div>
        </button>
      </div>
      <div className="flex flex-row justify-center my-[50px]">
        <form action="search">
          <div>
            <input
              className="border-[1px] border-[#555] outline-none p-[5px] rounded-[5px]"
              type="text"
              name="category"
            />
            <button className="rounded-[5px] border-[#222] border-[1px] p-[5px] ml-[10px]">
              Tìm kiếm
            </button>
          </div>
        </form>
      </div>
      <Items product={data} />
    </div>
  )
}

export default Page
