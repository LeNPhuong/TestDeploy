import Items from '@/app/components/boxcontent/Items'
import { NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'

const page: NextPage<{ searchParams: ParsedUrlQuery }> = async ({
  searchParams,
}) => {
  const category = searchParams.category

  const req = await fetch(
    `http://localhost:7602/api/lab/product?category=${category}`,
    { cache: 'no-cache' }
  )

  const data = await req.json()

  if (!data) {
    return (
      <h1 className="text-center mt-[50px] text-[20px]">Không có kết quả</h1>
    )
  }

  return (
    <div className="mt-[50px] flex flex-col">
      <div className="flex flex-row justify-center items-end">
        <h1 className="text-[30px]">
          Kết quả của: <span className="text-red-600">{category}</span>
        </h1>
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
      <Items product={data.data} />
    </div>
  )
}

export default page
