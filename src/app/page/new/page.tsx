'use client'

import React, { useState } from 'react'
import slugify from 'slugify'

const Page = () => {
  const [title, setTile] = useState<string>('')
  const [content, setContent] = useState<string>('')
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Bài viết
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Title"
                  onChange={(e) => setTile(e.target.value)}
                  value={title}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Slug
                </label>
                <input
                  value={slugify(title, { lower: false })}
                  type="text"
                  name="slug"
                  id="slug"
                  placeholder="Slug"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Content
                </label>
                <input
                  type="text"
                  name="content"
                  id="content"
                  placeholder="Content"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page
