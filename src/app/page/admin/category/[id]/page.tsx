'use client'

import React, { useEffect, useState } from 'react'

const Page: React.FC<{ params: { id: string } }> = ({ params }) => {
  const [name, setName] = useState('')

  useEffect(() => {
    ;(async function () {
      const rq = await fetch(
        `http://localhost:7602/api/lab/product/category/${params.id}`
      )
      const rs = await rq.json()
      console.log(rs)

      setName(rs.category.name)
    })()
  }, [params.id])

  async function updatedata() {
    try {
      const data = {
        name,
      }
      const rq = await fetch(
        `http://localhost:7602/api/lab/product/category/update/${params.id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      )
      const rs = await rq.json()
      alert(rs.message)
      window.location.reload()
    } catch (error) {
      alert('Cập nhật thất bại')
    }
  }

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sửa sản phẩm
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <button
                type="button"
                onClick={updatedata}
                className="w-full text-white bg-[#000] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sửa
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page
