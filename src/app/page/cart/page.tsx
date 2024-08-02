'use client'

import React from 'react'
import Items from './Items'
import { useAppSelector } from '../redux/store'

const Page = () => {
  const cart = useAppSelector((e) => e.cart.cart)

  return (
    <div className="max-w-[1200px] mx-auto my-[30px]">
      <div className="border-b-[2px] border-b-[#000] pb-[20px] mb-[50px]">
        <h1 className="text-[20px] uppercase font-[700]">Giỏ hàng của bạn:</h1>
      </div>
      {cart.length === 0 ? (
        <h1 className="text-center font-[500] text-[30px]">Giỏ hàng trống</h1>
      ) : (
        <div className="flex flex-col w-full gap-[10px]">
          <div className="grid grid-cols-[repeat(5,1fr)]">
            <p className="uppercase font-[500] text-center text-[18px]">
              Hình ảnh
            </p>
            <p className="uppercase font-[500] text-center text-[18px]">Tên</p>
            <p className="uppercase font-[500] text-center text-[18px]">Giá</p>
            <p className="uppercase font-[500] text-center text-[18px]">
              Số lượng
            </p>
            <p className="uppercase font-[500] text-center text-[18px]">
              Hành động
            </p>
          </div>
          {cart && cart?.map((e: any) => <Items key={e._id} data={e} />)}
          <h1 className="text-right text-[20px] uppercase mt-[50px]">
            Tổng tiền:{' '}
            <span className="text-red-500">
              {cart.reduce(
                (acc: any, cur: any) => acc + cur.price * cur.quantity,
                0
              )}
              đ
            </span>
          </h1>
        </div>
      )}
    </div>
  )
}

export default Page
