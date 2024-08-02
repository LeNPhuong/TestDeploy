'use client'

import React from 'react'

const page = () => {
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Thêm sản phẩm
            </h1>
            <form
              method="post"
              className="space-y-4 md:space-y-6"
              action="http://localhost:7602/api/lab/product/add"
              encType="multipart/form-data"
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Tên sản phẩm
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Name"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Giá
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="Giá"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Chi tiết
                </label>
                <input
                  type="text"
                  name="des"
                  id="des"
                  placeholder="Chi tiết"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Loại
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  placeholder="Loại"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Loại
                </label>
                <input
                  type="text"
                  name="kind"
                  id="kind"
                  placeholder="Loại sản phẩm"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Hình ảnh
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  placeholder="file"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-[#000] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Thêm
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
