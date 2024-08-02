'use client'

import React, { useState } from 'react'

const Page = () => {
  const [name, setName] = useState('')
  async function addCategory() {
    try {
      await fetch('http://localhost:7602/api/lab/product/category/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name }),
      })
      alert('Thêm thành công')
    } catch (error) {
      alert('Thêm thất bại')
    }
  }

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Thêm loại
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Tên loại
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <button
                type="button"
                onClick={addCategory}
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

export default Page
